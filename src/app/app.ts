import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './shared/header/header';
import {Footer} from './shared/footer/footer';
import { PersonalInfoRepository } from '../repository/personalInfo.repository';
import {UserInfo} from '../models/profileinfo.model';
import {openMail} from '../utils/open_mail.util';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
  profileInfo!: UserInfo;


  constructor(private dataService: PersonalInfoRepository) {
    this.profileInfo = this.dataService.getPersonalData;
  }

  send(): void {
    openMail(this.profileInfo.email)
  }


}
