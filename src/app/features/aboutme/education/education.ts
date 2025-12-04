import { Component, Input } from '@angular/core';
import { readImage } from '../../../utils/read-assets.util';
import { Education } from '../../../models/aboutme.model';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class EducationComponent {
  @Input({required:true}) education!: Education;
  protected readonly readImage = readImage;
}
