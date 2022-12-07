import { useEffect, useState, useRef } from 'react';
import SliderRow from '@/components/SliderRow';
import Slider from '@/components/Slider';
import Banner from '@/containers/Banner';
import Modal from '@/components/Menu';
import { useCallback } from 'react';
import styles from '@/styles/containers/mainView.module.scss';
import { responsiveSm, responsiveLrg } from '@/data/data';
import { useRouter } from 'next/router';
import { useGetThumbnailQuery } from '../generated/global/graphql';
import graphqlRequestClient from 'lib/graphqlRequestClient';
import { MovieEntityResponse } from '../generated/global/graphql';
import ContentCard from '@/components/ContentCard';
import CollectionCarousel from '@/components/CollectionCarousel';
import ContentCarousel from '@/components/ContentCarousel';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import NavColorChange from '@/components/NavColorChange';

interface Props {
  deviceType?: string;
}

const MainView = ({ deviceType }: Props) => {
  const [items, setItems] = useState<any>();
  const { data, isLoading } = useGetThumbnailQuery(graphqlRequestClient, {});
  const router = useRouter();
  // const bgColor = router.route === '/' ? '#fffefc' : 'transparent';
  // const root = useRef<HTMLDivElement>(null);
  // const tl = useRef<gsap.core.Timeline | null>(null);

  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   tl.current = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: root.current,
  //       start: 'top-=80',
  //       end: '+=400',
  //       toggleActions: 'play complete reverse reset',
  //     },
  //   });

  //   tl.current.fromTo(
  //     '#navbar',
  //     { backgroundColor: 'transparent' },
  //     {
  //       backgroundColor: '#141414',
  //       ease: 'sine.inOut',
  //       duration: 0.2,
  //     }
  //   );
  // }, []);

  useEffect(() => {
    if (!isLoading && data) {
      const { movies } = data;

      setItems(data.movies);
    }
  }, [isLoading, data]);

  const contentSlider = useCallback(() => {
    if (!items) {
      return <div>Something Went Wrong</div>;
    } else {
      return (
        <ContentCarousel
          deviceType={deviceType}
          responsive={responsiveSm}
          items={items}
        />
      );
    }
  }, [items, deviceType]);

  return (
    <NavColorChange preColor={'transparent'} postColor={'rgba(20, 20, 20, 1)'}>
      <div className={styles.container}>
        <div className={styles.outer}>
          <SliderRow title={'Bond Collections'}>
            <CollectionCarousel
              deviceType={deviceType}
              responsive={responsiveLrg}
              type={'lrg'}
            />
          </SliderRow>
          <SliderRow title={'New Releases'}>{contentSlider()}</SliderRow>

          <SliderRow title={'New Releases'}>{contentSlider()}</SliderRow>
          <SliderRow title={'New Releases'}>{contentSlider()}</SliderRow>

          <Banner />
        </div>
      </div>
    </NavColorChange>
  );
};

export default MainView;
