import Banner from '@/containers/Banner';
import styles from '@/styles/containers/MainView.module.scss';
import { responsiveLrg } from '@/src/data/data';
import Slider from '@/components/Slider';
import Row from '@/components/Row';
import {
  usePopularItems,
  useRecommendedItems,
  useAcclaimedItems,
  useNarrativeItems,
  useOriginalItems,
} from '@/src/lib/queries';

type MainViewProps = {
  deviceType?: string;
};

const MainView = ({ deviceType }: MainViewProps) => {
  let popular = usePopularItems();
  let recommended = useRecommendedItems();
  let narratives = useNarrativeItems();
  let acclaimed = useAcclaimedItems();
  let originals = useOriginalItems();

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.collection}>
          <div className={styles.category}>
            <h3>Bond Collection</h3>
          </div>
          <div className={styles.wrap}>
            <Slider
              deviceType={deviceType}
              responsive={responsiveLrg}
              type={'lrg'}
              infinite={false}
              arrowDisabled={true}
            />
          </div>
        </div>
        <Row title={'Popular'} query={popular} deviceType={deviceType} />
        <Row title={'originals'} query={originals} deviceType={deviceType} />
        <Row
          title={'Engaging Narratives'}
          query={narratives}
          deviceType={deviceType}
        />
        <Banner />
        <Row
          title={'Recommended'}
          query={recommended}
          deviceType={deviceType}
        />
        <Row
          title={'Critically Acclaimed'}
          query={acclaimed}
          deviceType={deviceType}
        />
      </div>
    </div>
  );
};

export default MainView;
