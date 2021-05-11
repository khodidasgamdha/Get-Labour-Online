import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/core/interface/user-info/user-info';
import { LoginService } from 'src/app/core/service/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() popup;
  users: UserInfo[];
  id;

  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.id = this.login.id;
    this.users = JSON.parse(localStorage.getItem('user'));
  }

}
