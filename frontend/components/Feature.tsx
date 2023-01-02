import { useRef, useState } from 'react';
import styles from '@/styles/components/Feature.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import Link from 'next/link';
import ResponsiveVideo from '@/components/ResponsiveVideo';
import Button from '@/components/Button';

function Feature() {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [playerState, setPlayerState] = useState({
    progress: 0,
    speed: 1,
    isMuted: true,
    volume: 1,
    autoPlay: true,
    loop: false,
    playing: true,
    url: 'https://res.cloudinary.com/dp5qjsiff/video/upload/v1669878077/Bond/livingdaylightsclip_acs63l.mp4',
  });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add(
      { isDesktop: '(min-width: 767px)' },
      context => {
        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top-=80',
          },
        });
        gsap.set('#video', { opacity: 0, display: 'none' });
        tl.current
          .to('#splash', { zIndex: 1, opacity: 0, delay: 10 })
          .to('#video', {
            opacity: 1,
            display: 'block',
            zIndex: 3,
          })
          .to('#video', {
            delay: 23,
            opacity: 0,
            display: 'none',
            zIndex: 1,
          })
          .to('#splash', { zIndex: 2, opacity: 1 });
      },
      root
    );

    return () => {
      mm.revert();
    };
  }, []);

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  return (
    <div className={styles.container} ref={root}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.image}>
            <Image
              id='splash'
              priority
              alt=''
              src='/images/browse_daylights.webp'
              width={1440}
              height={810}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              className={styles.mobile}
              alt=''
              src='/images/mobile_daylights.webp'
              width={800}
              height={134}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

          <div id='video' className={styles.video}>
            <ResponsiveVideo
              mute={playerState.isMuted}
              url={playerState.url}
              autoPlay={true}
              playing={true}
            />
          </div>
          <div className={styles.mute}>
            <button className={styles.icon} onClick={toggleMute}>
              {playerState.isMuted ? (
                <Image
                  alt='unmute'
                  src={'/icons/unmute.svg'}
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  alt='mute'
                  src={'/icons/mute.svg'}
                  width={30}
                  height={30}
                />
              )}
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <div>
            <div className={styles.image}>
              <Image
                priority
                alt=''
                src='https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669503912/Bond/livingdaylights_jhijl9.png'
                width={800}
                height={134}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <p>
              Timothy {"Dalton's"} first outing as Bond sees him run into a
              covert Russian operation involving international drugs and arms
              deals.
            </p>
            <div className={styles.buttons}>
              <div role='button'>
                <Image
                  alt='play'
                  src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668931579/Bond/play_wsmfxj.svg'
                  width='80'
                  height='80'
                />
              </div>
              <div>
                <Link href='/'>
                  <Button variant='tertiary'>More Info</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
