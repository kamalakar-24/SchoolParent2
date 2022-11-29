import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  staff=new FormGroup({
    staffName: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
  });

  constructor(private commonservice : CommonserviceService, private router:Router) { }

  save(){
   
    const observable : Observable<any> = this.commonservice.Signup(this.staff.value);
  observable.subscribe(
    (responce:any)=>{
      console.log(Response)
      alert("Signup Completed")
      this.router.navigate(['staff/Signin']);
    },
    function(){
      alert("Something went wrong please try again")
    }
  )
}

  ngOnInit(): void {
  }
  get staffName(): FormControl{
    return this.staff.get("staffName") as FormControl;
  }
  get email(): FormControl{
    return this.staff.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.staff.get("password") as FormControl;
  }

}
