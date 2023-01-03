import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchAPI } from '@/src/lib/queries';
import { ItemsProps, ResponseProps } from '@/typings/typings';
import styles from '@/styles/components/ContentItem.module.scss';
import Image from 'next/image';
import ErrorContainer from '@/containers/Error';

type ItemProps = {
  item: ItemsProps[];
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetchAPI(
    `/movies?populate=cast.actors,categories,seasons&filters[slug][$eq]=${params?.slug}`
  );

  return {
    props: {
      item: res.data,
    },
  };
};

const Item = ({ item }: ItemProps) => {
  const router = useRouter();

  const renderResults = () => {
    if (!router.isFallback && !item) {
      return <ErrorContainer />;
    } else {
      return (
        <main className={styles.container}>
          <div className={styles.container}>
            <div className={styles.outer}>
              <div className={styles.wrap}>
                <div className={styles.image}>
                  <Image
                    alt={title}
                    src={desk_img}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw'
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <Image
                    className={styles.mobile}
                    alt={title}
                    src={mobile_img}
                    sizes='(max-width: 1600px) 100vw'
                    fill
                    priority
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
                      <h1>{title}</h1>
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
                    <p> {`${rating}`} |</p>
                    <p>{`${runningTime}`}m |</p>
                    <p> {releaseYear}</p>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.synopsis}>
                      <p>{plot}</p>
                    </div>
                    <div className={styles.director}>
                      <h4>Director</h4>
                      <p>{director}</p>
                    </div>
                    <div className={styles.director}>
                      <h4>Writer</h4>
                      <p>{writer}</p>
                    </div>
                    <div className={styles.cast}>
                      <h4>Cast</h4>

                      {cast.actors.map(({ name, img_url, id }) => {
                        return (
                          <div className={styles.actor} key={id}>
                            <div className={styles.image}>
                              <Image
                                alt={name}
                                src={img_url}
                                width='45'
                                height='45'
                              />
                            </div>
                            <div className={styles.name}>
                              <p>{name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  };

  const {
    cast,
    desk_img,
    director,
    plot,
    writer,
    rating,
    releaseYear,
    runningTime,
    title,
    mobile_img,
  } = item[0] || '';

  return <>{renderResults()}</>;
};

export default Item;
