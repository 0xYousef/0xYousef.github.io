import { Component, Input } from '@angular/core';
import { Certification } from "../../../models/aboutme.model";
@Component({
  selector: 'app-certifications',
  imports: [],
  standalone: true,
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  @Input({required:true}) certifications !: Certification[];
}
