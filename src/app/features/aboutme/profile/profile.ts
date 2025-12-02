import { Component, OnInit } from '@angular/core';
import { Social, UserInfo } from '../../../models/profileinfo.model';
import { Accounts } from '../../../shared/accounts/accounts';
import ACCOUNTS_DATA from '../../../../assets/db/accounts.json';
import PERSONAL_DATA from '../../../../assets/db/personal_data.json';

@Component({
  selector: 'app-profile',
  imports: [Accounts],
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  user !: UserInfo;

  accounts !: Social[];
  ngOnInit(): void {
    this.user = PERSONAL_DATA as UserInfo;
    this.accounts = ACCOUNTS_DATA as Social[];
    this.accounts.forEach(account => {
      console.log(account);
    });

  }


}
