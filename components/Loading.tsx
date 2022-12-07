import React from 'react';
import cn from 'classnames';
import styles from '@/styles/components/loading.module.scss';
type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div className={styles.loading}>
            <div className={cn(styles.dot, styles['dot-0'])}></div>
            <div className={cn(styles.dot, styles['dot-1'])}></div>
            <div className={cn(styles.dot, styles['dot-2'])}></div>
            <div className={cn(styles.dot, styles['dot-3'])}></div>
            <div className={cn(styles.dot, styles['dot-4'])}></div>
            <div className={cn(styles.dot, styles['dot-5'])}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
