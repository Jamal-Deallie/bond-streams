import { ResponsiveData } from '../../types/typings';

export const responsiveSm: ResponsiveData = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 4,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};
export const responsiveLrg: ResponsiveData = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

export const linkOptions = [
  {
    id: 2,
    label: 'search',
    url: 'search',
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

export const collectionProps = [
  {
    id: 1,
    alt: 'Connery Collection',
    vidUrl:
      'https://res.cloudinary.com/dp5qjsiff/video/upload/v1668668502/Bond/test_xku6cj.mp4',
    imgUrl:
      'https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669874937/Bond/connery_collection_ll74fp.png',
    link: '/',
    isMuted: true,
    autoPlay: false,
  },
  {
    id: 2,
    alt: 'Lazenby Collection',
    vidUrl:
      'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669876688/Bond/moore_gunbarrell_t9vy2d.mp4',
    imgUrl:
      'https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669874937/Bond/moore_collection_soje86.png',
    link: '/',
    isMuted: true,
    autoPlay: false,
  },
  {
    id: 3,

    alt: 'Moore Collection',
    vidUrl:
      'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669876688/Bond/lazenby_gunbarrell_bfdi3x.mp4',
    imgUrl:
      'https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669874936/Bond/lazenby_collection_yhjp64.png',
    link: '/',
    isMuted: true,
    autoPlay: false,
  },
  {
    id: 4,
    alt: 'Dalton Collection',
    vidUrl:
      'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669876689/Bond/dolton_gunbarrell_tlw6y4.mp4',
    imgUrl:
      'https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669874937/Bond/dolton_collection_wbmrhj.png',
    link: '/',
    isMuted: true,
    autoPlay: false,
  },
  {
    id: 5,
    alt: 'Brosnan Collection',
    vidUrl:
      'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669876687/Bond/brosnan_gunbarrell_qa166l.mp4',
    imgUrl:
      'https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669874937/Bond/brosnan_collection_omupgo.png',
    link: '/',
    isMuted: true,
    autoPlay: false,
  },
  {
    id: 6,
    alt: 'Craig Collection',
    vidUrl:
      'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669876672/Bond/craig_gunbarrell_vnhgdq.mp4',
    imgUrl:
      'https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669874937/Bond/craig_collection_vmycx5.png',
    link: '/',
    isMuted: true,
    autoPlay: false,
  },
];
