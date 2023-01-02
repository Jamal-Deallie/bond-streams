import Image from 'next/image';
import styles from '@/styles/containers/Banner.module.scss';

type Props = {};

const banner = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.content}>
          <h1>Sean Connery: The Man and the Movies</h1>

          <p>
            The story of Ian Fleming, real-life spy, {"ladies'"} man and
            sportsman, who was there at the birth of MI-5, and gave the world
            one of its most enduring and iconic heroes: Bond. James Bond
          </p>
          <h4>The Documentary is now streaming</h4>
          <div className={styles.buttons}>
            <button>
              <span>&#9658;</span>
            </button>
            <button>More Info</button>
          </div>
        </div>
        <div className={styles.wrap}>
          <Image
            className={styles.image}
            src='https://res.cloudinary.com/dp5qjsiff/image/upload/f_auto,q_auto/v1669443892/Bond/connery-doc_vk5kee.png'
            alt='Ian Fleming'
            width={600}
            height={400}
            sizes='100vw'
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.overlay} />
      </div>
    </div>
  );
};

export default banner;
