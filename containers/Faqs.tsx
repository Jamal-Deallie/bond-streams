import Accordion from '@/components/Accordion';
import styles from '@/styles/containers/faqs.module.scss';
type Props = {};

const Faqs = (props: Props) => {
  return (
    <div className={styles.container} id='nav-color'>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <h1>
              Still Have Questions?
              <br /> We Have Answers
            </h1>
          </div>
          <div className={styles.wrap}>
            <div className={styles.accordion}>
              <Accordion />
            </div>
            <div className={styles.accordion}>
              <Accordion />
            </div>
            <div className={styles.accordion}>
              <Accordion />
            </div>
            <div className={styles.accordion}>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
