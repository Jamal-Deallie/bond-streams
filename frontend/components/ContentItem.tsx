import styles from '@/styles/components/ContentItem.module.scss';
import ResponsiveImage from '@/components/ResponsiveImage';
import Image from 'next/image';
type Props = {};

const ContentItem = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.wrap}>
          <div className={styles.image}>
            <Image
              alt='Mountains'
              src={'https://res.cloudinary.com/dp5qjsiff/image/upload/v1672024259/Bond/mincemeat_desk_e6bsey.webp'}
              fill
              sizes='100vw'
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.heading}>
              <div className={styles.title}>
                <h1>Goldfinger</h1>
              </div>

              <div className={styles.buttons}>
                <span>
                  <Image
                    alt='play'
                    src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668931579/Bond/play_wsmfxj.svg'
                    width='50'
                    height='50'
                  />
                </span>
                <span>
                  <Image
                    alt='watchlist'
                    src='https://res.cloudinary.com/dp5qjsiff/image/upload/v1668931675/Bond/watchlist_wb9ne5.svg'
                    width='50'
                    height='50'
                  />
                </span>
              </div>
            </div>
            <div className={styles.details}>
              <p> PG |</p>
              <p> 2h29m |</p>
              <p> 2019</p>
            </div>
            <div className={styles.info}>
              <div className={styles.synopsis}>
                <p>
                  The powerful tycoon Auric Goldfinger has initiated Operation
                  Grand Slam, a cataclysmic scheme to raid Fort Knox and
                  obliterate the world economy. James Bond, armed with his
                  specially equipped Aston Martin, must stop the plan by
                  overcoming several outrageous adversaries.
                </p>
              </div>
              <div className={styles.director}>
                <h4>Director</h4>
                <p>Name Name</p>
              </div>
              <div className={styles.cast}>
                <h4>Cast</h4>
                <div className={styles.actor}>
                  <div className={styles.image}>
                    <Image
                      alt='Sean Connery'
                      src='https://res.cloudinary.com/dp5qjsiff/image/upload/q_100/v1669276698/Bond/sean_connery_nwrybi.webp'
                      width='50'
                      height='64'
                    />
                  </div>
                  <div className={styles.name}>
                    <p>Sean Connery</p>
                  </div>
                </div>
                <div className={styles.actor}>
                  <div className={styles.image}>
                    <Image
                      alt='Sean Connery'
                      src='https://res.cloudinary.com/dp5qjsiff/image/upload/q_100/v1669276698/Bond/sean_connery_nwrybi.webp'
                      width='50'
                      height='64'
                    />
                  </div>
                  <div className={styles.name}>
                    <p>Sean Connery</p>
                  </div>
                </div>
                <div className={styles.actor}>
                  <div className={styles.image}>
                    <Image
                      alt='Sean Connery'
                      src='https://res.cloudinary.com/dp5qjsiff/image/upload/q_100/v1669276698/Bond/sean_connery_nwrybi.webp'
                      width='50'
                      height='64'
                    />
                  </div>
                  <div className={styles.name}>
                    <p>Sean Connery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
