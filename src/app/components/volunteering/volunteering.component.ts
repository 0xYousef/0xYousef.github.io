import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Volunteer} from '../../../models/volunteering.model';
import {VolunteeringRepository} from '../../../repository/Volunteering.repository';
import {readImage} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-volunteering',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './volunteering.component.html',
  styleUrl: './volunteering.component.css'
})
export class VolunteeringComponent {
  volunteers: Volunteer[] = VolunteeringRepository.prototype.getData;
  selectedVolunteer: any = null;

  showDetails(volunteer: any) {
    this.selectedVolunteer = volunteer;
  }

  closePopup() {
    this.selectedVolunteer = null;
  }


  protected readonly readImage = readImage;
}
