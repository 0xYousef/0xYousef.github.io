import {Injectable} from '@angular/core';
import ACHIEVEMENTS from '../db/achievements.json'
import {Achievement} from '../models/achievement.model';

@Injectable({providedIn: 'root'})
export class AchievementService {
  get read():Achievement[]{
    return ACHIEVEMENTS as Achievement[];
  }
}
