import { Component, Input } from '@angular/core';
import { Experience } from "../../../models/aboutme.model";
import { NgFor, NgIf, } from '@angular/common';
@Component({
  selector: 'app-experience',
  imports: [NgIf, NgFor],
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experiences {
  @Input({required:true}) experiences!: Experience[];
  selectedExperience: Experience | null = null;
  showDetails(experience: Experience): void {
    this.selectedExperience = experience;
  }

  closePopup(): void {
    this.selectedExperience = null;
  }
  
}
