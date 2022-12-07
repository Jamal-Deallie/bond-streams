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
