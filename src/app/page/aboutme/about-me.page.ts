import { Component } from '@angular/core';
import {ProfileDetailsComponent} from '../../components/profile-details/profile-details.component';
import {SkillsComponent} from '../../components/skills/skills.component';
import {CertificationsComponent} from '../../components/certifications/certifications.component';
import {VolunteeringComponent} from '../../components/volunteering/volunteering.component';
import {ExperiencesComponent} from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-aboutme',
  imports: [
    ProfileDetailsComponent,
    SkillsComponent,
    CertificationsComponent,
    VolunteeringComponent,
    ExperiencesComponent
  ],
  templateUrl: './about-me.page.html',
  styleUrl: './about-me.page.css'
})
export class AboutMePage {

}
