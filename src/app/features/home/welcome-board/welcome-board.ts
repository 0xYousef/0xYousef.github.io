import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Social, UserInfo } from '../../../models/profileinfo.model';
import ACCOUNTS_DATA from '../../../../assets/db/accounts.json';
import { Accounts } from '../../../shared/accounts/accounts';

@Component({
  selector: 'app-welcome-board',
  imports: [Accounts],
  templateUrl: './welcome-board.html',
  styleUrl: './welcome-board.css',
})
export class WelcomeBoard implements OnInit {
  userInfo : UserInfo = {
  "name": "Yousef Mohamed",
  "email": "yousef.mohamed.12@hotmail.com",
  "phone": "+20 0100-197-2068",
  "title": "Software Engineer",
  "address": "Cairo, Egypt",
  "image": "profile-img.png",
  "cv": "https://drive.google.com/file/d/1FgaVjsEPAcOuMfTFT9AIEZac77u3dCy3/view?usp=sharing"
};

  accounts !: Social[];
  ngOnInit(): void {
    this.accounts = ACCOUNTS_DATA as Social[];
  }
}
