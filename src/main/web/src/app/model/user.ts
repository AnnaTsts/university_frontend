import {UserDetails} from './user.details';
import {Chair} from '@models/chair';

export interface User {
  id: number;
  authorityId: number;
  email: string;
  username: string;
  password: string;
  authority: string;
  token?: string;

  // firstName?: string;
  // secondName?: string;
  // role?: string;
  // registrationDate?: string;
  // imgSrc?: string
}



export interface User2 {
  Id: string;
  UserName: string;
  Email: string;
  Password?: string;
  ChairId: number;
  Chair: Chair;
  GroupId: number;
}
