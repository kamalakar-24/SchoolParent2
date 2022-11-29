import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { HeaderComponent } from './header/header.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { HttpClientModule } from '@angular/common/http';
import { GetstudentsComponent } from './getstudents/getstudents.component';
import { StudentsgetComponent } from './studentsget/studentsget.component';
import { StaffcircularComponent } from './staffcircular/staffcircular.component';
import { HomeComponent } from './home/home.component';
import { GetcircularComponent } from './getcircular/getcircular.component';
import { CirculargetComponent } from './circularget/circularget.component';
import { ParentComponent } from './parent/parent.component';
import { StaffComponent } from './staff/staff.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';



const routes:Route []=[
  { path:'parent/studentRegistration', component: StudentRegistrationComponent},
  { path:'parent/updatestudent', component: UpdatestudentComponent},
  { path:'staff/studentsget', component: StudentsgetComponent},
  { path:'staff/staffcircular', component: StaffcircularComponent},
  { path:'home', component: HomeComponent},
  { path:'parent/circularget', component: CirculargetComponent},
  { path:'parent', component: ParentComponent},
  { path:'staff', component: StaffComponent},
  { path:'staff/Signup', component: SignupComponent},
  { path:'staff/Signin', component: SigninComponent},
  { path:'parent/parentLogin', component: ParentLoginComponent},
 

  ]

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    HeaderComponent,
    UpdatestudentComponent,
   
    StudentsgetComponent,
        StaffcircularComponent,
        HomeComponent,
        GetcircularComponent,
        CirculargetComponent,
        ParentComponent,
        StaffComponent,
        SignupComponent,
        SigninComponent,
        ParentLoginComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
