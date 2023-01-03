import ContentWrap from '@/containers/ContentWrap';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchAPI } from '@/src/lib/queries';
import { ItemsProps } from '@/typings/typings';
import ErrorContainer from '@/containers/Error';
import styles from '@/styles/containers/Category.module.scss';

type CategoryProps = {
  items: ItemsProps[];
  category?: string;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetchAPI(
    `/movies?populate=categories&filters[categories][category][$contains]=${params?.category}`
  );

  return {
    props: {
      items: res.data,
      category: params?.category,
    },
  };
};



const Category = ({ items, category }: CategoryProps) => {
  const router = useRouter();

  const renderResults = () => {
    if (!router.isFallback && !items && !category) {
      return <ErrorContainer />;
    } else {
      return (
        <main className={styles.container}>
          <div className={styles.outer}>
            <h1>{category}</h1>
            <div className={styles.inner}>
              <ContentWrap items={items} />
            </div>
          </div>
        </main>
      );
    }
  };

  return <>{renderResults()}</>;
};

export default Category;
