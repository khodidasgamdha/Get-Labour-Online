import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/core/interface/user-info/user-info';
import { LoginService } from '../../core/service/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  registrationForm;
  forgotPswrd;
  id;
  users;
  popup = false;
  active = true;
  hide1 = true;
  hide2 = true;
  hide3 = true;

  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router
  ) {

    // login form
    this.loginForm = this.fb.group({
      email: ['', Validators.required,],
      password: ['', Validators.required,],
    })

    // registration form
    this.registrationForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })

    // forgot password form
    this.forgotPswrd = this.fb.group({
      email: ['', Validators.required]
    })
    
  }

  ngOnInit(): void {
    this.id = this.login.id; //get logged user id

    // get user data from server
    this.login.getUser().subscribe(data => {
      this.users = data.map(e => {
        return {
          ref_id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as UserInfo;
      })
    });
    this.users = JSON.stringify(this.users);
  }

  // login
  signIn(email, password) {
    this.login.login(email, password);
    localStorage.setItem('user', JSON.stringify(this.users));
  }
  
  // forgot password
  forgotPassword(email) {
    this.login.ForgotPassword(email);
  }
  
  // register
  signUp(firstName, lastName, email, password) {
    this.login.registration(firstName, lastName, email, password);
    this.router.navigate(['login']);
  }

  // get loginForm controls
  get loginEmail() {
    return this.loginForm.get('email');
  }
  get loginPassword() {
    return this.loginForm.get('password');
  }
  get firstname() {
    return this.registrationForm.get('firstName');
  }
  get registrationEmail() {
    return this.registrationForm.get('email');
  }
  get registrationPassword() {
    return this.registrationForm.get('password');
  }
  get confirmpassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get forgotEmail() {
    return this.forgotPswrd.get('email');
  }

}
