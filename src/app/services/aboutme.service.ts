import { Injectable } from "@angular/core";
import EXPERINCES_DATA from "../../assets/db/experiences.json"
import EDUCATION_DATA from "../../assets/db/education.json"
import SKILLS_DATA from "../../assets/db/skills.json"
import VOLUNTEERS_DATA from "../../assets/db/volunteers.json"
import CERTIFICATES_DATA from "../../assets/db/certificates.json"
import { Experience, Education, Skill, Certification, Volunteer } from "../models/aboutme.model";


@Injectable({
    providedIn: 'root'
  })
export class AboutService{
    
    get getExperience(): Experience[] {
        return EXPERINCES_DATA as Experience[]
    }

    get getEducation(): Education {
        return EDUCATION_DATA as Education
    }

    get getSkills(): Skill[] {
        return SKILLS_DATA as Skill[]
    }

    get getcertifactes():Certification[]{
        return CERTIFICATES_DATA as Certification[]
    }

    get getVolunteers():Volunteer[]{
        return VOLUNTEERS_DATA as Volunteer[]
    }
}
