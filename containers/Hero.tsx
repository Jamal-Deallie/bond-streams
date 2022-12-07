import Link from 'next/link';
import styles from '@/styles/containers/hero.module.scss';
import Button from '@/components/Button';
import ResponsiveVideo from '@/components/ResponsiveVideo';

const Hero = () => {
  // const https://res.cloudinary.com/dp5qjsiff/video/upload/v1668294815/Bond/bond_trailer_vay7hq.mp4
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <ResponsiveVideo
            mute={true}
            url={
              'https://res.cloudinary.com/dp5qjsiff/video/upload/v1668294815/Bond/bond_trailer_vay7hq.mp4'
            }
            autoPlay={true}
            playing={true}
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
              <Link href='signup'>
                <Button variant='primary'>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
