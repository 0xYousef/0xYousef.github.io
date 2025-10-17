import { Component, Input } from '@angular/core';
import {NgForOf} from '@angular/common';
import {UserInfo} from '../../../models/profileinfo.model';
import {readIcon} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./footer.css']
})
export class Footer {
  protected readonly readIcon = readIcon;

  @Input({ required: true }) userInfo!: UserInfo;
  get socialAccounts() {
    return Object.values(this.userInfo.social);
  }
}
