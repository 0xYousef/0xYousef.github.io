import {Component, Input} from '@angular/core';
import {WelcomeComponent} from '../../components/welcome.component/welcome.component';
import {PersonalInfoRepository} from '../../../repository/personalInfo.repository';
import {openMail} from '../../../utils/open_mail.util';
import {ProfileDetailsComponent} from '../../components/profile-details.component/profile-details.component';
import {
  Category_achievementsComponent
} from '../../components/category-achievements.component/category_achievements.component';

@Component({
  selector: 'app-home-page',
  imports: [
    WelcomeComponent,
    ProfileDetailsComponent,
    Category_achievementsComponent
  ],
  templateUrl: './home-page.page.html',
  styleUrl: './home-page.page.css'
})
export class HomePagePage {
  userInfo= PersonalInfoRepository.prototype.getPersonalData;
  send(): void {
    openMail(this.userInfo.email)
  }
}
