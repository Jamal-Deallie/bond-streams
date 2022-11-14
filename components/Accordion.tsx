import styles from '@/styles/components/accordion.module.scss';
type Props = {};

const Accordion = (props: Props) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <button className={styles.question}>
          <h3>Question</h3>

          <span>&#x2B;</span>
        </button>
        <div className={styles.answer} id='answer'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. n
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
