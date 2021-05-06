import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]],
    pincode: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[0-9]*')]],
    gender: ['', [Validators.required, Validators.minLength(4)]],
    username: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z.@]*')]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('[a-zA-Z0-9!@#$%^&*]*')]]
  });

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  registerData() {
    if (this.signupForm.valid) {
      var name = this.signupForm.value.name;
      var phone = this.signupForm.value.phone;
      var pincode = this.signupForm.value.pincode;
      var username = this.signupForm.value.username;
      var password = this.signupForm.value.password;
      var gender = this.signupForm.value.gender;

      this.dataService.signUp(username, password, name, parseInt(pincode), parseInt(phone), gender).subscribe((data: any) => {
        if (data) {
          alert(data.message);
          this.router.navigateByUrl("");
        }
      }, (data) => {
        alert(data.error.message);
      })

    }
    else {
      alert("Invalid Data! Please try again with correct data");
    }


  }

}
