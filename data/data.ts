import { DynamicFieldData } from '../types/dynamic-control-types';
import { ResponsiveData } from '../types/typings';

export const registerFields: DynamicFieldData[] = [
  {
    fieldName: 'firstName',
    inputType: 'text',
    label: 'First Name',
    defaultValue: '',
  },
  {
    fieldName: 'lastName',
    inputType: 'text',
    label: 'Last Name',
    defaultValue: '',
  },
  {
    fieldName: 'email',
    inputType: 'email',
    label: 'Email',
    defaultValue: '',
  },
  {
    fieldName: 'password',
    inputType: 'password',
    label: 'Password',
    defaultValue: '',
  },
  {
    fieldName: 'repeatPassword',
    inputType: 'password',
    label: 'Repeat Password',
    defaultValue: '',
  },
];

export const signinFields: DynamicFieldData[] = [
  {
    fieldName: 'email',
    inputType: 'email',
    label: 'Email',
    defaultValue: '',
  },
  {
    fieldName: 'password',
    inputType: 'password',
    label: 'Password',
    defaultValue: '',
  },
];

export const responsiveSm: ResponsiveData = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 4,
    paritialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    paritialVisibilityGutter: 30,
  },
};

export const responsiveLrg: ResponsiveData = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2.5,
    paritialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    paritialVisibilityGutter: 30,
  },
};

export const linkOptions = [
  {
    id: 1,
    label: 'Home',
    url: 'browse',
  },
  {
    id: 2,
    label: 'Search',
    url: '/',
  },
  {
    id: 3,
    label: 'Movies',
    url: '/',
  },
  {
    id: 4,
    label: 'Series',
    url: '/',
  },
  {
    id: 5,
    label: 'Documentaries',
    url: '/',
  },
];
