import React from 'react';
import Card from '@/components/Card';
import styles from '@/styles/containers/ContentWrap.module.scss';
import { ItemsProps } from '@/typings/typings';

type ContentProps = {
  items: ItemsProps[];
  category: string;
};

const ContentWrap = ({ items, category }: ContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <h1>{category}</h1>
        <div className={styles.inner}>
          <div className={styles.wrap}>
            {items.map(item => {
              return <Card key={item.id} items={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrap;
