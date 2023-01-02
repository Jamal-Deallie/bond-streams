import Card from '@/components/Card';
import styles from '@/styles/containers/ContentWrap.module.scss';
import { ItemsProps } from '@/typings/typings';

type ContentProps = {
  items: ItemsProps[];
};

const ContentWrap = ({ items }: ContentProps) => {
  return (
    <div className={styles.wrap}>
      {items.map(item => {
        return <Card key={item.id} items={item} />;
      })}
    </div>
  );
};

export default ContentWrap;
