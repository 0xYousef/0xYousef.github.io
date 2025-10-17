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
