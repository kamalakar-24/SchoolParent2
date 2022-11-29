import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  staff=new FormGroup({
    password: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email])
  
  });
  constructor(private commonservice : CommonserviceService) { }

  save(){
   
    const observable : Observable<any> = this.commonservice.Signin(this.staff.value);
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
  get email(): FormControl{
    return this.staff.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.staff.get("password") as FormControl;
  }

}
