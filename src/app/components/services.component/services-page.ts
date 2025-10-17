import { Component } from '@angular/core';
import {Service} from '../../../models/services.model';
import {PersonalInfoRepository} from '../../../repository/personalInfo.repository';
import {NgForOf} from '@angular/common';
import {readIcon} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-services-component',
  imports: [
    NgForOf
  ],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesComponent {
  services: Service[] = PersonalInfoRepository.prototype.getServices;
  protected readonly readIcon = readIcon;
}
