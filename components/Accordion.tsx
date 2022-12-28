import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import styles from '@/styles/components/Accordion.module.scss';
type Props = {};

const Accordion = (props: Props) => {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleToggle = useCallback(
    () => setOpenAccordion(openAccordion => !openAccordion),

    [setOpenAccordion]
  );

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ pause: true })
        .to('#btn', {
          backgroundColor: '#d4a25b',
          color: 'rgba(20, 20, 20, 1)',
        })
        .to('#icon', { color: 'rgba(20, 20, 20, 1)', rotate: '45deg' })
        .to('#answer', { height: 'auto' });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl.current) {
      openAccordion ? tl.current.play() : tl.current.reverse();
    }
  }, [tl, openAccordion]);

  return (
    <div className={styles.accordion} ref={root}>
      <div className={styles.item}>
        <button className={styles.question} onClick={handleToggle} id='btn'>
          <h3>Question</h3>

          <span id='icon'>&#x2B;</span>
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
