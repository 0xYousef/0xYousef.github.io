import { Component, Input } from '@angular/core';
import { Volunteer } from '../../../models/aboutme.model';

@Component({
  selector: 'app-volunteers',
  imports: [],
  standalone: true,
  templateUrl: './volunteers.html',
  styleUrl: './volunteers.css',
})
export class Volunteers {
  @Input({required:true})volunteers!: Volunteer[]

  selectedVolunteer: any = null;

  showDetails(volunteer: any) {
    this.selectedVolunteer = volunteer;
  }

  closePopup() {
    this.selectedVolunteer = null;
  }
}
