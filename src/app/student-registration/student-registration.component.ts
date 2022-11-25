import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  save = new FormGroup({
    parentName: new FormControl("",[Validators.required]),
    studentName:new FormControl("",[Validators.required]),
    country:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    studentAge: new FormControl("",[Validators.required]),
    registrationDate:new FormControl("",[Validators.required]),
    zipCode: new FormControl("",[Validators.required]),
    emailAddress:new FormControl("",[Validators.required,Validators.email]),
    primaryContactPerson:new FormControl("",[Validators.required]),
    primaryContactPersonMobile:new FormControl("",[Validators.required]),
    secondaryContactPerson:new FormControl("",[Validators.required]),
    secondaryContactPersonMobile:new FormControl("",[Validators.required]),

  });

  constructor(private commonservice:CommonserviceService) { }

  student(){
   
      const observable : Observable<any> = this.commonservice.StudentRegistration(this.save.value);
    observable.subscribe(
      (responce:any)=>{
        console.log(Response)
        alert("Submitted")
      },
      function(){
        alert("Something went wrong please try again")
      }
    )
  }
  ngOnInit(): void {
  }
  get parentName(): FormControl{
    return this.save.get("parentName") as FormControl;
  }
  get studentName(): FormControl{
    return this.save.get("studentName") as FormControl;
  }
  get country(): FormControl{
    return this.save.get("country") as FormControl;
  }
  get state(): FormControl{
    return this.save.get("country") as FormControl;
  }
  get city(): FormControl{
    return this.save.get("city") as FormControl;
  }
  get address(): FormControl{
    return this.save.get("city") as FormControl;
  }
  get studentAge(): FormControl{
    return this.save.get("studentAge") as FormControl;
  }
  get registrationDate(): FormControl{
    return this.save.get("registrationDate") as FormControl;
  }
  get zipCode(): FormControl{
    return this.save.get("zipCode") as FormControl;
  }
  get emailAddress(): FormControl{
    return this.save.get("emailAddress") as FormControl;
  }
  get primaryContactPerson(): FormControl{
    return this.save.get("primaryContactPerson") as FormControl;
  }
  get primaryContactPersonMobile(): FormControl{
    return this.save.get("primaryContactPersonMobile") as FormControl;
  }
  get secondaryContactPerson(): FormControl{
    return this.save.get("secondaryContactPerson") as FormControl;
  }
  get secondaryContactPersonMobile(): FormControl{
    return this.save.get("secondaryContactPersonMobile") as FormControl;
  }
}
