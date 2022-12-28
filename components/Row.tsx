import { ReactNode, useCallback } from 'react';
import styles from '@/styles/components/SliderRow.module.scss';
import Slider from '@/components/Slider';
import { responsiveSm, responsiveLrg } from '@/src/data/data';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

type RowProps = {
  title?: string;
  query?: any;
  deviceType?: string;
};

const Row = ({ title, query, deviceType }: RowProps) => {
  let { data, isLoading, error, isSuccess } = query;


  const contentSlider = useCallback(() => {
    if (isLoading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else if (isSuccess) {
      return (
        <Slider
          deviceType={deviceType}
          responsive={responsiveSm}
          items={data?.data}
          type={'sm'}
        />
      );
    } else {
      return null;
    }
  }, [data, deviceType, error, isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h3>{title}</h3>
      </div>
      <div>{contentSlider()}</div>
    </div>
  );
};

export default Row;
