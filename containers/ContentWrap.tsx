import React from 'react';
import Card from '@/components/Card';
import styles from '@/styles/containers/contentWrap.module.scss';
type Props = {};

const ContentWrap = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <h1>Movies</h1>
        <div className={styles.inner}>
          <div className={styles.wrap}>
            {Array.from(Array(14).keys()).map(i => {
              return <Card key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrap;
