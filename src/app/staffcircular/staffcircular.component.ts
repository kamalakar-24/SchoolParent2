import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-staffcircular',
  templateUrl: './staffcircular.component.html',
  styleUrls: ['./staffcircular.component.css']
})
export class StaffcircularComponent implements OnInit {

  staff=new FormGroup({
    informationText:new FormControl("",[Validators.required]),
    notificationPostedBy: new FormControl("",[Validators.required]),
    notificationDate:new FormControl("",[Validators.required])
  });

  save(){
    const observable :Observable<any>=this.commonservice.staffcircular(this.staff.value);
    observable.subscribe(
      (responce : any)=>{
        console.log(Response)
        alert("Notification posted Successfully")
      },
      // function(){
      //   alert("Something went wrong try Again")
      // }
    )
  }
  constructor(private commonservice :CommonserviceService) { }
  ngOnInit(): void {
  }
 get informationText(): FormControl{
   return this.staff.get("informationText") as FormControl;
 }
  get notificationPostedBy(): FormControl{
    return this.staff.get("notificationPostedBy") as FormControl;
  }
  get notificationDate(): FormControl{
    return this.staff.get("notificationDate") as FormControl;
  }

}
