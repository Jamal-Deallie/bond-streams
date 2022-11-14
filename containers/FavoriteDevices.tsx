import React from 'react';
import styles from '@/styles/containers/favoriteDevices.module.scss';
import Image from 'next/image';
type Props = {};

const FavoriteDevices = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <div className={styles.inner}>
            <h1>Available on your favorite devices</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more
            </p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.image}>
            <Image
              alt=''
              src='https://res.cloudinary.com/dp5qjsiff/image/upload/q_91/v1668307219/Bond/iPhone_13_Pro_tqkrrt.webp'
              fill
              objects-fit='cover'
              sizes="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDevices;
