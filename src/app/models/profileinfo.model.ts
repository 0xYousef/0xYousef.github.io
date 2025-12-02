export const PostsTypes = ['blogs', 'projects', 'tutorial'];

export interface UserInfo {
  title: string;
  email: string;
  name: string;
  phone: string;
  image: string;
  cv:string;
  address: string;
}

export interface Social {
  name:string,
  link: string;
  icon: string
}

export interface Service {
  name: string
  description: string
  image: string
}

