import { Injectable } from '@angular/core';
import PersonalInfo from '../db/personal_data.json'
import ServicesData from '../db/services.json'
import {UserInfo} from '../models/profileinfo.model';
import {Service} from '../models/services.model';

@Injectable({providedIn: 'root'})
export class PersonalInfoRepository {

  get getPersonalData():UserInfo{
    return PersonalInfo as UserInfo;
  }

  get getServices():Service []{
    return ServicesData as Service[];
  }

}

