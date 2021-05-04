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
  signUp(username: any, name: any, password: any) {
    const data = {
      username,
      name,
      password
    }
    return this.http.post("http://localhost:3000/signup", data, options);
  }
}
