import {Component, Input} from '@angular/core';
import {UserInfo} from '../../../models/profileinfo.model';
import {PersonalInfoRepository} from '../../../repository/personalInfo.repository';
import {readImage} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-profile-details',
  imports: [],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
    user:UserInfo= PersonalInfoRepository.prototype.getPersonalData;
  protected readonly readImage = readImage;
}
