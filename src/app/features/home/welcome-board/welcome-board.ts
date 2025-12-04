import { Component, inject } from '@angular/core';
import { Social, UserInfo } from '../../../models/profileinfo.model';
import { Accounts } from '../../../shared/accounts/accounts';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-welcome-board',
  imports: [Accounts],
  templateUrl: './welcome-board.html',
  styleUrl: './welcome-board.css',
})
export class WelcomeBoard {
  private meta : MetaService = inject(MetaService) 
  userInfo !: UserInfo 
  accounts !: Social[];

  ngOnInit(): void {
    this.userInfo = this.meta.personalInformation
    this.accounts = this.meta.accounts
  }
}
