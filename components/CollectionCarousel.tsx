import { useCallback } from 'react';
import Carousel from 'react-multi-carousel';
import ContentCard from '@/components/ContentCard';
import CollectionCard from '@/components/CollectionCard';
import { MovieEntityResponse } from '../generated/global/graphql';

interface Props {
  deviceType?: string;
  responsive: any;
  type: string;
  items?: any;
}

const collectionProps = [
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
const CollectionCarousel = ({ deviceType, responsive }: Props) => {
  const cards = useCallback(() => {
    if (collectionProps) {
      return collectionProps.map(props => {
        return <CollectionCard key={props.id} {...props} />;
      });
    }
  }, []);

  return (
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass='image-item'
      responsive={responsive}>
      {cards()}
    </Carousel>
  );
};

export default CollectionCarousel;
