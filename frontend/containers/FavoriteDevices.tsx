import React from 'react';
import styles from '@/styles/containers/FavoriteDevices.module.scss';
import Image from 'next/image';
type Props = {};

const FavoriteDevices = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <h1>Available on your favorite devices</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.device}>
            <div className={styles.image}>
              <Image
                alt=''
                src='/images/iphone_bond.png'
                fill
                objects-fit='cover'
                sizes='100%'
              />
            </div>
            <div className={styles.cont}>
              <div className={styles.wrap}>
                <div className={styles.gif}>
                  <Image
                    alt=''
                    src='/images/yolt-bond.gif'
                    fill
                    objects-fit='cover'
                    sizes='100%'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDevices;
