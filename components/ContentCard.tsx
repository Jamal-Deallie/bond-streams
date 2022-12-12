import styles from '@/styles/components/contentCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';


type ContentCardProps = {
  items?: any;
};

const ContentCard = ({ items }: ContentCardProps) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.box} id='box'>
        <div className={styles.outer} id='outer'>
          <Link href={`browse/?series=${items.slug}`}>
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
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
