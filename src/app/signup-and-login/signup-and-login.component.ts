import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';
import { DemoAppService } from '../demo-app.service';

@Component({
  selector: 'app-signup-and-login',
  templateUrl: './signup-and-login.component.html',
  styleUrls: ['./signup-and-login.component.scss']
})
export class SignupAndLoginComponent implements OnInit {
  userName = new FormControl('', Validators.required);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);
  email = new FormControl('', Validators.required);
  varuserName: any;
  doSignup: boolean = false;
  submitted: boolean = false;
  userDetails: any;
  isErrorExist: boolean = false;
  errorMessage: any;
  constructor(private router: Router, private dataService: DataService,
    private demoAppService: DemoAppService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.doSignup = this.dataService.doSignup;
    if (this.router.url === '/signup') {
      this.doSignup = true;
      this.dataService.doSignup = true;
    } else {
      this.doSignup = false;
      this.dataService.doSignup = false;
    }

  }

  onSignup() {
    this.submitted = true;
    const request = {
      "user": {
        "username": this.userName.value,
        "email": this.email.value,
        "password": this.password.value
      }
    };
    this.authService.userSignup(request).subscribe(
      (res: any) => {
        this.userDetails = res?.user;
        this.dataService.userDetails = res?.user;
        this.authService.setBearerToken(this.userDetails?.token);
        sessionStorage.setItem("username", this.userDetails.username);
        this.userName.reset();
        this.password.reset();
        this.email.reset();
        this.dataService.doSignup = false;
      },
      (err) => {
        this.password.reset();
        this.email.reset();
        this.userName.reset();
        this.dataService.doSignup = false;

      });
  }

  onLogin() {
    this.submitted = true;
    this.doSignup = true;
    const request = {
      "user": {
        "email": this.email.value,
        "password": this.password.value
      }
    };

    this.authService.userLogin(request).subscribe(
      (res: any) => {
        this.isErrorExist = false;
        this.userDetails = res?.user;
        this.dataService.userDetails = res?.user;
        this.authService.setBearerToken(this.userDetails?.token);
        sessionStorage.setItem("username", this.userDetails?.username);
        this.password.reset();
        this.email.reset();
        this.dataService.doSignup = false;

      },
      (err) => {
        this.isErrorExist = true;
        this.errorMessage = err;
        this.password.reset();
        this.email.reset();
        this.dataService.doSignup = false;
      }
    );
  }
}