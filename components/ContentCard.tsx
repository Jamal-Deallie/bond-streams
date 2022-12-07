import { useRef, useCallback } from 'react';
import styles from '@/styles/components/contentCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { MovieEntity } from '../generated/global/graphql';
import ResponsiveVideo from '@/components/ResponsiveVideo';

type ContentCardProps = {
  items?: any;
  // active: boolean;
  setActive: any;
};

const ContentCard = ({ items, setActive }: ContentCardProps) => {
  const root = useRef<any | null>(null);
  const tl = useRef<any | null>(null);

  const activeFunc = useCallback(
    () => setActive((active: boolean) => !active),

    [setActive]
  );
  
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      return (tl.current = gsap
        .timeline({ paused: true })
        .call(activeFunc)
        .to(root.current, {
          duration: 0.5,
          zIndex: 300,
          position: 'relative',
        })
        .to(
          '#outer',
          { scale: 1.1, marginRight: '1.5rem', marginTop: '1.5rem' },
          '<'
        )
        .to('#content', {
          visibility: 'visible',
          opacity: 1,
          duration: 0.5,
          zIndex: 300,
        })
        .to(
          '#video',
          {
            boxShadow: 'rgba(0, 0, 0, 0.36) 0rem -.5rem .75rem .7rem',
          },
          '<'
        )
        .to(
          '#content',
          {
            boxShadow: 'rgba(0, 0, 0, 0.36) 0rem .5rem .75rem .7rem',
          },
          '<'
        )
        .to('#video', { zIndex: 200, display: 'block', opacity: 1 }));
    }, root);
    return () => ctx.revert();
  }, []);

  const onMouseEnterHandler = () => {
    tl?.current?.play();
  };
  const onMouseLeaveHandler = () => {
    tl?.current?.reverse();
  };


  return (
    <div
      ref={root}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={styles.container}>
      <div className={styles.box} id='box'>
        <div className={styles.outer} id='outer'>
          <Link href='browse/?series=goldfinger'>
            <div className={styles.image}>
              <Image
                alt={''}
                src={items.thumbnail}
                fill
                object-fit='cover'
                sizes='100%'
              />
            </div>
          </Link>
          <Link href='browse/?series=goldfinger'>
            <div
              //  className={styles.video}

              id='video'>
              {/* <ResponsiveVideo
                mute={true}
                url={items.trailer}
                autoPlay={true}
                playing={true}
              /> */}
            </div>
          </Link>
          <div className={styles.inner} id='content'>
            <div className={styles.row}>
              <div>
                <span>
                  <Image
                    alt='play'
                    src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668931579/Bond/play_wsmfxj.svg'
                    width='24'
                    height='24'
                  />
                </span>
                <span>
                  <Image
                    alt='watchlist'
                    src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668931675/Bond/watchlist_wb9ne5.svg'
                    width='20'
                    height='20'
                  />
                </span>
              </div>
              <span>
                <Image
                  alt='info'
                  src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668932974/Bond/info_pzuhhq.svg'
                  width='24'
                  height='24'
                />
              </span>
            </div>
            <div className={styles.content}>
              <h4>{items.title}</h4>
              <p>{items.plot}</p>
            </div>
            <div className={styles.row}>
              <div className={styles.icons}>
                <span>{items.rating}</span>
                <Image
                  alt='AD Sound'
                  src='https://res.cloudinary.com/dp5qjsiff/image/upload/c_scale,h_20,q_100/v1668935443/Bond/4k_wcsosz.svg'
                  width='32'
                  height='10'
                />
                <Image
                  alt='4K Full HD'
                  src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668935442/Bond/ad_h6a6a6.svg'
                  width='25'
                  height='10'
                />
              </div>
              <span>{`${items.runningTime} m`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
