import Image from 'next/image';
import styles from '@/styles/containers/OriginalContent.module.scss';
type Props = {};

const OriginalContent = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.flex}>
          <div className={styles.wrap}>
            <div className={styles.image}>
              <Image
                alt=''
                src='https://res.cloudinary.com/dp5qjsiff/image/upload/q_89/v1668309674/Bond/ian_fleming_xthihw.webp'
                fill
                objects-fit='cover'
                sizes='100%'
              />
            </div>
            <p>Fleming: The Man Who Would Be Bonds</p>
          </div>
          <div className={styles.content}>
            <div className={styles.inner}>
              <h1>Visionary Original Series and 60 Years of films</h1>
              <p>
                With a continuously-updated library of groundbreaking shows,
                movies and docuseries, Bond + brings fresh and diverse
                perspectives to your device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OriginalContent;
