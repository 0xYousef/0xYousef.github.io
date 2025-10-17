import { Component } from '@angular/core';
import {Certification} from '../../../models/certifications.model';
import {CertificationRepository} from '../../../repository/certification.repository';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [
    NgForOf
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = CertificationRepository.prototype.read;

}
