import React from 'react';
import styles from '@/styles/components/feature.module.scss';
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  },
});

function Feature() {
  const myVideo = cld.video('Bond/goldfinger_trailer_potdwm');
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
              <div className={styles.image}>
                <Image
                  alt='GoldFinger'
                  src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668396666/Bond/goldfinger_logo_ccgmba.png'
                  fill
                  objects-fit='cover'
                  sizes='100%'
                />
              </div>
              <p>
                While investigating a gold{"magnate's"} smuggling, James Bond
                uncovers a plot to contaminate the Fort Knox gold reserve.
              </p>
              <div className={styles.buttons}>
                <button>
                  <div>Play</div>
                  <Image
                    alt='Info'
                    src='/images/icons/play.svg'
                    width={25}
                    height={25}
                  />
                </button>
                <button>
                  <div>More Info</div>

                  <Image
                    alt='Info'
                    src='/images/icons/info.svg'
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
