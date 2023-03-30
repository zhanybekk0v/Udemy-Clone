export interface mentor {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
  type: string;
  experience: string;
  audience: string
}


export interface user {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
}

export interface IpopVideo {
  id: number;
  img: string;
  title: string;
  avtor: string;
  reiting: number;
  watched: string;
  price: string;
  prev_price: string;
  popular: string;
}