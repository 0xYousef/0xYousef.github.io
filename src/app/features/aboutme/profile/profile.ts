import { Component, inject, OnInit } from '@angular/core';
import { Social, UserInfo } from '../../../models/profileinfo.model';
import { Accounts } from '../../../shared/accounts/accounts';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-profile',
  imports: [Accounts],
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {


  constructor(meta:MetaService){
}
  private meta = inject(MetaService)
  user !: UserInfo
  accounts !: Social[];

  ngOnInit(): void {
    this.user = this.meta.personalInformation;
    this.accounts = this.meta.accounts;
  }


}
