import { useCallback} from 'react';
import Carousel from 'react-multi-carousel';
import ContentCard from '@/components/ContentCard';

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
  const contentCards = useCallback(() => {
    if (items) {
      return items.movies?.data?.map(({ attributes }: any) => {
        return <ContentCard key={attributes.slug} items={attributes} />;
      });
    }
  }, [items]);

  return (
    <Carousel
      ssr
      infinite={false}
      deviceType={deviceType}
      // itemClass='image-item'
      renderArrowsWhenDisabled={true}
      responsive={responsive}>
      {contentCards()}
    </Carousel>
  );
};

export default ContentCarousel;
