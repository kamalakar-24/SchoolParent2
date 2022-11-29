import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent implements OnInit {
  student=new FormGroup({
    password: new FormControl("",[Validators.required]),
    emailAddress:new FormControl("",[Validators.required,Validators.email])
  
  });

  constructor(private commonservice : CommonserviceService) { }

  save(){
   
    const observable : Observable<any> = this.commonservice.parentLogin(this.student.value);
  observable.subscribe(
    (responce:any)=>{
      console.log(Response)
      alert("SignIn Completed")
    },
    function(){
      alert("Something went wrong please try again")
    }
  )
}

  ngOnInit(): void {
  }
  get emailAddress(): FormControl{
    return this.student.get("emailAddress") as FormControl;
  }
  get password(): FormControl{
    return this.student.get("password") as FormControl;
  }
}
