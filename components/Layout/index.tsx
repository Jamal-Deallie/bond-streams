import { ReactNode, useRef, useEffect } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import styles from '@/styles/components/layout.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

const Layout = ({ children }: { children: ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const bgColor = router.route === '/' ? '#fffefc' : 'transparent';

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: '#nav-color',
        start: 'top-=80',
        end: 'center center',
        onEnter: () => {
          navColor('#1a1b1d');
        },
        onEnterBack: () => {
          navColor(bgColor);
        },
      });

      function navColor(color: string) {
        gsap.to('#navbar', { backgroundColor: color, ease: 'sine.inOut' });
      }
    }, root);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <div className={styles.container} ref={root}>
      <Navbar bgColor={bgColor} />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
