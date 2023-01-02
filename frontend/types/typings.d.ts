export interface RegisterData {
  username: '';
  email: '';
  password: '';
  repeatPassword: '';
  privacyPolicy: false;
  newsletterSubscription: false;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface ResponsiveData {
  desktop: {
    breakpoint: { max: number; min: number };
    items: number;
    paritialVisibilityGutter: number;
  };
  tablet: {
    breakpoint: { max: number; min: number };
    items: number;
    paritialVisibilityGutter: number;
  };
  mobile: {
    breakpoint: { max: number; min: number };
    items: number;
    paritialVisibilityGutter: number;
  };
}

export interface ItemsProps {
  id: number;
  slug: string;
  runningTime: ?number;
  title: string;
  director: string;
  writer?: string;
  plot: string;
  rating: string;
  popularity: number;
  trailer: string;
  createdAt: date;
  updatedAt: date;
  publishedAt: date;
  releaseYear: number;
  thumbnail: string;
  desk_img: string;
  mobile_img: string;
  type: string;
  genre: string;
  numofseasons?: number;
  score: number;
  bond?: string;
  cast: {
    id: number;
    createdAt: date;
    updatedAt: date;
    publishedAt: date;
    movie?: string;
    actors: Actors[];
  };
  categories: Categories[];
  seasons?: Seasons[];
}

interface Cast {
  id: number;
  createdAt: date;
  updatedAt: date;
  publishedAt: date;
  category: string;
}

interface Categories {
  id: number;
  createdAt: date;
  updatedAt: date;
  publishedAt: date;
  category: string;
}

interface Actors {
  id: number;
  name: string;
  img_url: string;
  createdAt: date;
  updatedAt: date;
  publishedAt: date;
}

interface Seasons {
  id: number;
  createdAt: date;
  updatedAt: date;
  publishedAt: date;
  season: number;
  slug: string;
}

export interface ResponseProps {
  data: ItemsProps[];
  meta: { pagination: { start: number; limit: number; total: number } };
}

export interface RegisterInputProps {
  email: string;
  password: string;
  username?: string;
  name?: string;
}

export interface ItemResponseProps {
  data: {
    movies: ItemsProps[];
  };
}

export interface FavInputProps {
  jwt: string;
  id: number;
}
