import { Component } from '@angular/core';
import { PageLayout } from "../../shared/page-layout/page-layout";
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { Profile } from "./profile/profile";
import { Experiences } from "./experience/experience";
import { Skills } from "./skills/skills";
import { Certifications } from "./certifications/certifications";
import { Volunteers } from "./volunteers/volunteers";
import { Social } from '../../models/profileinfo.model';

@Component({
  selector: 'app-aboutme',
  imports: [PageLayout, Certifications, Profile, SectionLayout, Volunteers, Skills, Experiences, Experiences],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme {

}
