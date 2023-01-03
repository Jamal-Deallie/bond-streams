import styles from '@/styles/containers/NotFound.module.scss';

type Props = {};

const ErrorContainer = (props: Props) => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.outer}>
          <span>404</span>
          <p>Sorry, but we can’t find what you are looking for.</p>
        </div>
      </div>
    </main>
  );
};

export default ErrorContainer;
