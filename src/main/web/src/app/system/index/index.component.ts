import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {



  ngOnInit() {
   window.scrollTo(0, 0);
   console.log("Im alive");
  }

}

