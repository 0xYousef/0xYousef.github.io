  import { Component, OnInit } from '@angular/core';
import { Social, UserInfo } from '../../models/profileinfo.model';
import { Accounts } from "../accounts/accounts";
import ACCOUNTS_DATA from '../../../assets/db/accounts.json';
import PERSONAL_DATA from '../../../assets/db/personal_data.json';
@Component({
  selector: 'app-footer',
  imports: [Accounts],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  userInfo !: UserInfo;
  accounts !: Social[];
  ngOnInit(): void {
    this.userInfo = PERSONAL_DATA as UserInfo;
    this.accounts = ACCOUNTS_DATA as Social[];
  }
}
