import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/ScrollButton.module.scss';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={styles.button}
      style={{ display: visible ? 'inline' : 'none' }}>
      <div>
        <Image
          alt='scroll up'
          src={'/icons/arrow.svg'}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </button>
  );
};

export default ScrollButton;
