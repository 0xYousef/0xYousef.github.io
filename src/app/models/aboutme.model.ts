export interface Certification {
  title: string;
  company: string;
  description: string;
  image: string;
  issued: string;
  link: string;
}
export interface Education {
  university: string;
  degree: string;
  faculty: string;
  description: string;
  image: string;
  skills: string[];
  duration: {
    start: string;
    end: string;
  };
}
export interface Company{
  name: string;
  link: string;
}
export interface Experience {
  title: string;
  company: Company;
  description: string;
  field:string;
  image: string;
  duration: {
    start: string;
    end: string;
  },
  location: string;
  locationType: string;
  employmentType :string
}

export interface Skill {
  title: string;
  icon: string;
  progress: number;
}
export interface Volunteer {
  title: string;
  company: string;
  description: string;
  image: string;
  duration:{
    start: string;
    end: string;
  }
  skills: string[];
}
