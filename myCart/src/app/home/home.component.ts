import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[a-zA-Z.@]*')]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('[a-zA-Z0-9!@#$%^&*]*')]]
  });

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    alert("Login Button Clicked!");
    if (this.loginForm.valid) {
      var username = this.loginForm.value.username;
      var password = this.loginForm.value.password;
      alert(username + "   " + password)
      this.dataService.login(username, password);
    }
    else{
      alert(this.loginForm.valid);
      alert("Invalid Data");
    }
  }
  signUp() {
    alert("Sign Up Clicked");
  }

}
