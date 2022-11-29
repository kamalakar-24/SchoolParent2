import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    notificationDate:"",
    acknowledgementDate:""
  }
  Circulars : any[]=[];

  acknowledgment={
    notificationId:""
  }
  
  getCircular(){
    const observable=this.commonservice.getCirculars();
    observable.subscribe((studentformserver : any)=> {
      this.Circulars=studentformserver;
      alert(studentformserver.no);
    }
    )
  }
  constructor(private commonservice: CommonserviceService, private router:Router) { }

  ACKNOWLEDGEMENT(Circular1:any){
    this.acknowledgment.notificationId=Circular1.notificationId
   alert(this.acknowledgment.notificationId)
    const observable : Observable<any> = this.commonservice.Acknowledgement(this.acknowledgment);
  observable.subscribe(
    (responce:any)=>{
         console.log(Response)
    
    }
  )
}
  ngOnInit(): void {
  }

}
