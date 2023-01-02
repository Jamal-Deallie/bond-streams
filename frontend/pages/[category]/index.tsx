import ContentWrap from '@/containers/ContentWrap';
import { GetStaticProps, GetStaticPaths } from 'next';
import { fetchAPI } from '@/src/lib/queries';
import { ResponseProps, ItemsProps } from '@/typings/typings';
import styles from '@/styles/containers/Category.module.scss';

type CategoryProps = {
  items: ItemsProps[];
  category: string;
};

const Category = ({ items, category }: CategoryProps) => {
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
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res: ResponseProps = await fetchAPI(
    '/movies?populate=categories&pagination[limit]=100'
  );

  const newArr = res.data.map(({ categories }) => {
    return categories.map(({ category }) => {
      return category;
    });
  });
  let uniqueObject: string[] = [];

  newArr.forEach(cat => {
    for (const i in cat) {
      uniqueObject.push(cat[i]);
    }
  });

  let uniqueCats = [...new Set(uniqueObject)];

  const paths = uniqueCats.map(cats => {
    return { params: { category: cats.toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Category;
