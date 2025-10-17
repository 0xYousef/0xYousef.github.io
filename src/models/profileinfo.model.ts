export interface Social {
  discord:{link: string; icon: string };
  medium: { link: string; icon: string };
  github: { link: string; icon: string };
  linkedin: { link: string; icon: string };
  youtube: { link: string; icon: string };
}

export interface UserInfo {
  title: string;
  email: string;
  name: string;
  phone: string;
  image: string;
  cv:string;
  social: Social;
  address: string;
}
