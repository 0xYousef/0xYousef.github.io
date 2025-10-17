import {Injectable} from '@angular/core';
import VOLUNTEERING from '../db/volunteering.json';
import {Volunteer} from '../models/volunteering.model';

@Injectable({providedIn: 'root'})
export class VolunteeringRepository {
  get getData() : Volunteer[]{
    return VOLUNTEERING as Volunteer[];
  }
}
