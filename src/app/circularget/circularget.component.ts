import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-circularget',
  templateUrl: './circularget.component.html',
  styleUrls: ['./circularget.component.css']
})
export class CirculargetComponent implements OnInit {
  Circular={
    notificationId:"",
    informationText:"",
    notificationPostedBy:"",
    notificationDate:""
  }
  Circulars : any[]=[];
  
  getCircular(){
    const observable=this.commonservice.getCirculars();
    observable.subscribe((studentformserver : any)=> {
      this.Circulars=studentformserver;
    }
    )
  }
  constructor(private commonservice: CommonserviceService, private router:Router) { }

  ngOnInit(): void {
  }

}
