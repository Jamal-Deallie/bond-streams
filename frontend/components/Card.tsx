import styles from '@/styles/components/Card.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  items?: any;
};

const Card = ({ items }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <Link href={`browse/${items.slug}`} className={styles.link}>
          <div className={styles.image}>
            <Image
              alt={items.title}
              src={items.thumbnail}
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
