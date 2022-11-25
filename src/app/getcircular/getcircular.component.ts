import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getcircular',
  templateUrl: './getcircular.component.html',
  styleUrls: ['./getcircular.component.css']
})
export class GetcircularComponent implements OnInit {

  Circular={
    notificationId:"",
    informationText:"",
    notificationPostedBy:"",
    notificationDate:""
  }
  Circulars : any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
