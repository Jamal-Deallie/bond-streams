import Row from '@/components/Row';
import styles from '@/styles/containers/browse.module.scss';
type Props = {};

const MainView = (props: Props) => {
  return (
    <div className={styles.container} id='nav-color'>
      <Row />
    </div>
  );
};

export default MainView;
