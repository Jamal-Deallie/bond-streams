import { useRef, MouseEvent, useState } from 'react';
import styles from '@/styles/components/collectionCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { gsap } from 'gsap/dist/gsap';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import ResponsiveVideo from '@/components/ResponsiveVideo';

type CardProps = {
  id: number;
  alt: string;
  vidUrl: string;
  imgUrl: string;
  link: string;
  isMuted: boolean;
  autoPlay: boolean;
};
const CategoryCard = ({
  alt,
  vidUrl,
  imgUrl,
  link,
  isMuted,
  id,
  autoPlay,
}: CardProps) => {
  const root = useRef<HTMLDivElement>(null);
  const vid = useRef<any>();

  const [playerState, setPlayerState] = useState({
    progress: 0,
    speed: 1,
    isMuted: true,
    volume: 1,
    autoPlay: true,
    loop: false,
    playing: false,
    url: 'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669878077/Bond/livingdaylightsclip_acs63l.mp4',
  });

  function onMouseOver() {
    vid?.current?.videoRef.current.play();
    vid?.current?.unmute();
  }

  function onMouseOut() {
    vid?.current?.videoRef.current.pause();
    vid?.current?.mute();
  }

  const hoverPlay = () => {
    setPlayerState({
      ...playerState,
      playing: true,
    });
  };

  const hoverPause = () => {
    setPlayerState({
      ...playerState,
      playing: false,
    });
  };

  return (
    <Link href={link} key={id}>
      <div
        className={styles.container}
        onMouseOver={hoverPlay}
        onMouseOut={hoverPause}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.video}>
              <ResponsiveVideo
                url={vidUrl}
                mute={true}
                autoPlay={false}
                playing={playerState.playing}
              />
            </div>
            <div className={styles.image}>
              <div className={styles.wrap}>
                <Image
                  alt={alt}
                  src={imgUrl}
                  fill
                  object-fit='cover'
                  sizes='100%'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCard;
