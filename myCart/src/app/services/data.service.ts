import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const options = {
  withCredentials: true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private router: Router ) { }

  login(username: any, password: any) {

    const data = {
      username,
      password
    }
    return this.http.post("http://localhost:3000/login", data, options);
  }
  signUp(username: any, password: any, name: any,pincode:any,phone:any,gender:any) {
    const data = {
      username,
      password,
      name,
      pincode,
      phone,
      gender
    }
    return this.http.post("http://localhost:3000/signup", data, options);
  }
}
