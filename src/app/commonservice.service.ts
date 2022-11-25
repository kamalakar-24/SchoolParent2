import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  BASE_URL="http://localhost:9010/parent"
  BASE_URL2="http://localhost:9020/staff"


  StudentRegistration(student :any){
    // const headers = new HttpHeaders({'Content-Type':'text/plain'});
    return this.http.post(this.BASE_URL+'/saveParent',student)
  }

  updateStudent(student : any){
        return this.http.put(this.BASE_URL+'/updateParent',student)
  }
  getStudents(){
    return this.http.get(this.BASE_URL2+'/getStudents')
  }
  staffcircular(staff : any){
    return this.http.post(this.BASE_URL2+'/save',staff)
  }
  getCirculars(){
    return this.http.get(this.BASE_URL+'/getcirculars')
  }
  Approval(staff : any){
    // const headers = new HttpHeaders({'Content-Type':'text/plain'});
    return this.http.post(this.BASE_URL+'/approval',staff)
  }

  constructor(private http: HttpClient) { }
}
