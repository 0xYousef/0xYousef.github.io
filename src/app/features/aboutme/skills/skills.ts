import { Component, Input } from '@angular/core';
import { Skill } from '../../../models/aboutme.model';

@Component({
  selector: 'app-skills',
  imports: [],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  @Input({required:true}) skills!: Skill[];

  get sliderIcons(): Skill[] {
    return this.skills ? this.skills.concat(this.skills) : [];
  }
}
