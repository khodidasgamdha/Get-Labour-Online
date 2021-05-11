import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserInfo } from '../../core/interface/user-info/user-info';
import { LoginService } from '../../core/service/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users: UserInfo[];
  popup = false;
  change = false;
  forgotPswrd;
  id = this.login.id;
  postsCreatedByUser;

  constructor(
    private login: LoginService,
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) { 

    // forgot password form
    this.forgotPswrd = this.fb.group({
      email: ['', Validators.required]
    })
    
  }

  ngOnInit(): void {
    this.id = this.login.id;
    this.users = JSON.parse(localStorage.getItem('user'));
  }
  
  // show according icon
  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  // logout
  logout() {
    Swal.fire({
      title: 'Are you sure want to Logout?',
      text: 'You will not be able to see your Details!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout!',
      cancelButtonText: 'No, keep in!'
    }).then((result) => {
      if (result.value) {
      this.login.logOut();
        Swal.fire(
          'Logged Out!',
          'You are Successfully Logout.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'No warry, You are stayed :)',
          'error'
        )
      }
    })
  }

  // forgot password
  forgotPassword(email) {
    this.login.ForgotPassword(email);
  }

  // get control
  get forgotEmail() {
    return this.forgotPswrd.get('email');
  }

}
