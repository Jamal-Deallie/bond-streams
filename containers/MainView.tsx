import { useCallback } from 'react';
import SliderRow from '@/components/SliderRow';
import Banner from '@/containers/Banner';
import styles from '@/styles/containers/mainView.module.scss';
import { responsiveSm, responsiveLrg } from '@/src/data/data';
import { useGetThumbnailQuery } from '../src/global/graphql';
import graphqlRequestClient from '@/src/lib/graphqlRequestClient';
import { GetThumbnailQuery } from '../src/global/graphql';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import Slider from '@/components/Slider';

type MainViewProps = {
  deviceType?: string;
};

const MainView = ({ deviceType }: MainViewProps) => {
  const { data, isLoading, error } = useGetThumbnailQuery<
    GetThumbnailQuery,
    Error
  >(graphqlRequestClient, {});

  const contentSlider = useCallback(() => {
    if (isLoading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
      return (
        <Slider
          deviceType={deviceType}
          responsive={responsiveSm}
          items={data}
          type={'sm'}
        />
      );
    }
  }, [data, deviceType, error, isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <SliderRow title={'Bond Collection'}>
          <Slider
            deviceType={deviceType}
            responsive={responsiveLrg}
            type={'lrg'}
            infinite={false}
            arrowDisabled={true}
          />
        </SliderRow>

        <SliderRow title={'Recently Added'}>{contentSlider()}</SliderRow>
        <SliderRow title={'Oscar-Winning Films'}>{contentSlider()}</SliderRow>
        <SliderRow title={'Critically Acclaimed'}>{contentSlider()}</SliderRow>
        <Banner />
        <SliderRow title={'Originals'}>{contentSlider()}</SliderRow>
        <SliderRow title={'Documentaries'}>{contentSlider()}</SliderRow>
        <SliderRow title={'Memorable Bond Girls'}>{contentSlider()}</SliderRow>
      </div>
    </div>
  );
};

export default MainView;

// Oscar-Winning Films
// Documentaries
// Critically Acclaimed
// Originals
