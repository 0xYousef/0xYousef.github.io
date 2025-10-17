import {Injectable} from '@angular/core';
import CERTIFICATIONS from '../db/certificates.json'
import {Certification} from '../models/certifications.model';

@Injectable({providedIn: 'root'})
export class CertificationRepository {
  get read():Certification[]{
    return CERTIFICATIONS as Certification[];
  }
}
