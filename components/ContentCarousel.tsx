import { useCallback, useState } from 'react';
import Carousel from 'react-multi-carousel';
import ContentCard from '@/components/ContentCard';
import { MovieEntityResponse } from '../generated/global/graphql';

interface ContentCarouselProps {
  deviceType?: string;
  responsive: any;
  items?: any;
}

const ContentCarousel = ({
  deviceType,
  responsive,
  items,
}: ContentCarouselProps) => {
  const [active, setActive] = useState(false);

  const contentCards = useCallback(() => {
    if (items) {
      return items?.data?.map(({ attributes }: any) => {
        return (
          <ContentCard
            key={attributes.slug}
            items={attributes}
            setActive={setActive}
          />
        );
      });
    }
  }, [items]);

  return (
    <div style={{ position: 'relative', zIndex: active ? 300 : 1 }}>
      <Carousel
        ssr
        deviceType={deviceType}
        itemClass='image-item'
        responsive={responsive}>
        {contentCards()}
      </Carousel>
    </div>
  );
};

export default ContentCarousel;
