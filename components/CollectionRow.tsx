import { useCallback } from 'react';
import CollectionCard from '@/components/CollectionCard';
import { collectionProps } from '../src/data/data';
import styles from '@/styles/components/collectionRow.module.scss';

const CollectionCarousel = () => {
  const cards = useCallback(() => {
    if (collectionProps) {
      return collectionProps.map(props => {
        return <CollectionCard key={props.id} {...props} />;
      });
    }
  }, []);

  return (
    // <div className={styles.container}>
    //   <div className={styles.inner}></div>
    // </div>

    <div className={styles.container}>
      <div className={styles.category}>
        <h3>Bond Collection</h3>
      </div>
      <div className={styles.wrap}>{cards()}</div>
    </div>
  );
};

export default CollectionCarousel;
