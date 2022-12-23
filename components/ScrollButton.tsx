import { useState } from 'react';
import Image from 'next/image';

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

  window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={scrollToTop}>
      <div
        style={{
          display: visible ? 'inline' : 'none',
          position: 'relative',
          width: '300px',
          height: '300px',
        }}>
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
