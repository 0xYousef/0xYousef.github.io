import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {readIcon, readImage} from '../../../utils/read-assets.utils';
import {UserInfo} from '../../../models/profileinfo.model';

@Component({
  selector: 'app-welcome',
  imports: [
    NgForOf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  protected readonly readImage = readImage;
  protected readonly readIcon = readIcon;
  @Input({ required: true }) userInfo!: UserInfo;
  get socialAccounts() {
    return Object.values(this.userInfo.social);
  }
  @Output() hire = new EventEmitter();

  send(): void {
    this.hire.emit();
  }

}
