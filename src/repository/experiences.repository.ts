import {Injectable} from '@angular/core';
import EXPERIENCES from '../db/experiences.json';
import {Experience} from '../models/experience.model';

@Injectable({providedIn: 'root'})
export class ExperiencesRepository {

  get getData():Experience[]{
    return EXPERIENCES as Experience[];
  }
}
