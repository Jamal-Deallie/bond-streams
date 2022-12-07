import { useRef } from 'react';
import styles from '@/styles/components/card.module.scss';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

type Props = {};

const Card = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <Link href='browse/movie/goldfinger' className={styles.link}>
          <div className={styles.image}>
            <Image
              alt='connery'
              src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668735828/Bond/goldfinger_cjtjeu.webp'
              fill
              object-fit='cover'
              sizes='100%'
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
