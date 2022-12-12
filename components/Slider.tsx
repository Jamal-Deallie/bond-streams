import { useCallback } from 'react';
import Carousel from 'react-multi-carousel';
import Card from '@/components/Card';
import CollectionCard from '@/components/CollectionCard';
import { collectionProps } from '@/src/data/data';

interface Props {
  deviceType?: string;
  responsive: any;
  type: string;
  items?: any;
  infinite?: boolean;
  arrowDisabled?: boolean;
  class?: string;
}

const Slider = ({
  deviceType,
  responsive,
  type,
  items,
  infinite = true,
  arrowDisabled = false,
}: Props) => {
  const contentCards = useCallback(() => {
    if (items) {
      return items.movies?.data?.map(({ attributes }: any) => {
        return <Card key={attributes.slug} items={attributes} />;
      });
    }
  }, [items]);

  console.log(items);
  return (
    <Carousel
      ssr
      infinite={infinite}
      renderArrowsWhenDisabled={arrowDisabled}
      deviceType={deviceType}
      itemClass={type === 'sm' ? 'img-sm' : 'img-lrg'}
      responsive={responsive}>
      {type === 'sm'
        ? contentCards()
        : collectionProps.map(props => {
            return <CollectionCard key={props.id} {...props} />;
          })}
    </Carousel>
  );
};

export default Slider;
