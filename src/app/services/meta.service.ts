import { Injectable } from "@angular/core";
import { Service, Social, UserInfo } from "../models/profileinfo.model";
import ACCOUNTS_DATA from "../../assets/db/accounts.json";
import USER_DATA from "../../assets/db/personal_data.json";
import SERVICES_DATA from "../../assets/db/services.json";

@Injectable({
    providedIn: 'root'
  })
export class MetaService {
  get accounts(): Social[] {
    return ACCOUNTS_DATA as Social[];
  }

  get personalInformation(): UserInfo {
    return USER_DATA as UserInfo;
  }

  get services(): Service[] {
    return SERVICES_DATA as Service[];
  }
}