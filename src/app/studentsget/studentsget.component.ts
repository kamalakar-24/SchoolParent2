import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-studentsget',
  templateUrl: './studentsget.component.html',
  styleUrls: ['./studentsget.component.css']
})
export class StudentsgetComponent implements OnInit {

  student={

studentRegistrationId:"",
parentName : "",
studentName : "",
address: "",
country: "",
city: "",
studentAge: "",
state: "",
registrationDate: "",
zipCode: "",
emailAddress: "",
primaryContactPerson: "",
primaryContactPersonMobile: "",
secondaryContactPerson: "",
secondaryContactPersonMobile: "",
status:""
}
students : any[]=[];

aprroval =new FormGroup({
  studentRegistrationId:new FormControl("",[Validators.required]),
  status:new FormControl("",[Validators.required]),
  description:new FormControl("",[Validators.required]),
  
  });


getStudents(){
  const observable=this.commonservice.getStudents();
  observable.subscribe((studentformserver : any)=> {
    this.students=studentformserver;
  }
  )
}

getApproval(){
  const observable : Observable<any> = this.commonservice.Approval(this.aprroval.value);
  observable.subscribe(
    (Response:any)=>{
      // alert(Response.message);
      alert("Status Updated Successfully")
    },
    // (error: any)=>{
    //   alert("Something went wrong please try again")
    // }
  )
  }
  constructor(private commonservice: CommonserviceService, private router : Router) { }

  ngOnInit(): void {
  }

  get studentRegistrationId(): FormControl{
    return this.aprroval.get("studentRegistrationId") as FormControl;
  }
  get status(): FormControl{
    return this.aprroval.get("status") as FormControl;
  }
  get description(): FormControl{
    return this.aprroval.get("description") as FormControl;
  }

}
