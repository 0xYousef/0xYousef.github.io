import {Component} from '@angular/core';
import {WelcomeComponent} from '../../components/welcome/welcome.component';
import {PersonalInfoRepository} from '../../../repository/personalInfo.repository';
import {openMail} from '../../../utils/open_mail.util';
import {
  Category_achievementsComponent
} from '../../components/category-achievements/category_achievements.component';
import {ServicesPage} from '../services/services.page';

@Component({
  selector: 'app-home-page',
  imports: [
    WelcomeComponent,
    Category_achievementsComponent,
    ServicesPage
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
  userInfo= PersonalInfoRepository.prototype.getPersonalData;
  send(): void {
    openMail(this.userInfo.email)
  }
}
