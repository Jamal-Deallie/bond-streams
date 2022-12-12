import { ReactNode, useRef, useEffect } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import styles from '@/styles/components/layout.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';

const Layout = ({ children }: { children: ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const bgColor = router.route === '/' ? '#fffefc' : 'transparent';

  return (
    <div className={styles.container} ref={root} id='root'>
      <Navbar bgColor={bgColor} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
