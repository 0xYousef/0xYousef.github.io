import { Component } from '@angular/core';
import {Experience} from '../../../models/experience.model';
import {ExperiencesRepository} from '../../../repository/experiences.repository';
import {NgForOf, NgIf} from '@angular/common';
import {readImage} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-experiences',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences: Experience[] = ExperiencesRepository.prototype.getData;

  selectedExperience: Experience | null = null;

  showDetails(experience: Experience): void {
    this.selectedExperience = experience;
  }

  closePopup(): void {
    this.selectedExperience = null;
  }

  protected readonly readImage = readImage;
}
