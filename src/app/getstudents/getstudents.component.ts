import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getstudents',
  templateUrl: './getstudents.component.html',
  styleUrls: ['./getstudents.component.css']
})
export class GetstudentsComponent implements OnInit {

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
   status:"",
   descriptin:""
    }
  students : any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
