import { Component } from '@angular/core';
import {Skills} from '../../../models/skills.model';
import {SkillsRepository} from '../../../repository/skills.repository';
import {NgForOf} from '@angular/common';
import {readIcon} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skills[] = SkillsRepository.prototype.getSkills;
  protected readonly readIcon = readIcon;
}
