import {Injectable} from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {environment} from "@environments/environment";
import {AuthService} from "@services/auth.service";
import {BehaviorSubject} from "rxjs";
import {Notification} from "@models/notification";
import {ChatMessage, ChatMessageGlobal} from "@models/chat.models";
import {Role} from "@models/role";
import {TroubleTicket, TroubleTicketMessage} from "@models/trouble.ticket";

@Injectable({
  providedIn: 'root'
})
export class StompClientService {
  lastNotification = new BehaviorSubject<Notification>(null);

  messageInGlobalChat = new BehaviorSubject<ChatMessageGlobal>(null);
  messagesForSupportChat = new BehaviorSubject<ChatMessage>(null);

  troubleTicketsMessage = new BehaviorSubject<TroubleTicketMessage>(null);
  troubleTicketChanging = new BehaviorSubject<TroubleTicket>(null);
  troubleTicketCreating = new BehaviorSubject<TroubleTicket>(null);

  private stompClient;

  constructor(private authService: AuthService) {
  }

  private get userId() {
    return this.authService.getDecodedToken().sub;
  }

  disconnect() {
    this.stompClient.disconnect();
    this.lastNotification.next(null);
    this.messagesForSupportChat.next(null);
    this.messageInGlobalChat.next(null);
    this.stompClient.unsubscribe();
  }

  connect() {
    let ws = new SockJS(environment.ws, null, {reconnectIfNotNormalClose: true});
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = null;
    if (this.authService.currentUserValue) {
      this.stompClient.connect({}, frame => {

        this.stompClient.subscribe('/notification/user/' + this.userId, (message) => {
          this.lastNotification.next(JSON.parse(message.body));
        });

        this.stompClient.subscribe('/messages/globalChat', (message) => {
          this.messageInGlobalChat.next(JSON.parse(message.body));
        });


        // user support chat chanel
        if (this.authService.getDecodedToken().authority === Role.User) {
          this.stompClient.subscribe('/messages/chat/' + this.userId, (message) => {
            this.messagesForSupportChat.next(JSON.parse(message.body));
          });
        }

        // notifications for support chat new message
        this.stompClient.subscribe('/notification/messages/' + this.userId, (message) => {
          this.lastNotification.next(JSON.parse(message.body));
        });


        // notifications about trouble tickets for user
        this.stompClient.subscribe('/troubleTickets/messageForUser/' + this.userId, (message) => {
          this.troubleTicketsMessage.next(JSON.parse(message.body));
        });

        this.stompClient.subscribe('/troubleTickets/changeStatusForUser/' + this.userId, (message) => {
          this.troubleTicketChanging.next(JSON.parse(message.body));
        });

        this.stompClient.subscribe('/troubleTickets/newTicket', (message) => {
          this.troubleTicketCreating.next(JSON.parse(message.body));
        });


        // notifications for approvers
        if (this.authService.getDecodedToken().authority == Role.Approver) {
          // for all approvers
          this.stompClient.subscribe('/notification/approvers', (message) => {
            this.lastNotification.next(JSON.parse(message.body));
          });
          // for approver by id
          this.stompClient.subscribe('/notification/approver/' + this.userId, (message) => {
            this.lastNotification.next(JSON.parse(message.body));
          });

          // messages for approvers chat
          this.stompClient.subscribe('/messages/chat', (message) => {
            this.messagesForSupportChat.next(JSON.parse(message.body));
          });


          // notifications about trouble tickets
          this.stompClient.subscribe('/troubleTickets/messageForApprover/' + this.userId, (message) => {
            this.troubleTicketsMessage.next(JSON.parse(message.body));
          });

          this.stompClient.subscribe('/troubleTickets/changeStatusForApprover/' + this.userId, (message) => {
            this.troubleTicketChanging.next(JSON.parse(message.body));
          });
        }

        // notifications for provider
        if (this.authService.getDecodedToken().authority == Role.Provider) {
          // for all providers
          this.stompClient.subscribe('/notification/provider/' + this.userId, (message) => {
            this.lastNotification.next(JSON.parse(message.body));
          });

        }

      });
    }
  }

  sendMessageToSupportChat(message: ChatMessage) {
    this.stompClient.send('/app/supportChat', {}, JSON.stringify(message));
  }

  sendMessageToGlobalChat(message: ChatMessageGlobal) {
    this.stompClient.send('/app/globalChat', {}, JSON.stringify(message));
  }
}
