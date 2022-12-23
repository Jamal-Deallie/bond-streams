import { ReactNode } from 'react';
import styles from '@/styles/components/SliderRow.module.scss';
type Props = {
  children: ReactNode;
  title?: string;
};

const SliderRow = ({ children, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h3>{title}</h3>
      </div>
      <div className={styles.wrap}>{children}</div>
    </div>
  );
};

export default SliderRow;
