import React from 'react';
import styles from '@/styles/containers/hero.module.scss';
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  },
});

const Hero = () => {
  const myVideo = cld.video('Bond/bond_trailer_vay7hq');
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <AdvancedVideo
            cldVid={myVideo}
            autoPlay
            loop
            muted
            plugins={[lazyload()]}
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div>
              <h1>
                THE BEST OF BOND… <br />
                James BOND
              </h1>

              <p>
                Unlimited movies, TV shows, and more. Watch anywhere. Cancel
                anytime.
              </p>

              <button >Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
