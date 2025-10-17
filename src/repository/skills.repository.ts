import {Injectable} from '@angular/core';
import SKILLS from '../db/skills.json';
import {Skills} from '../models/skills.model';

@Injectable({providedIn: 'root'})
export class SkillsRepository {
  get getSkills():Skills[]{
    return SKILLS as Skills[];
  }
}
