import { ReactNode, useRef } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import styles from '@/styles/components/layout.module.scss';
import { useRouter } from 'next/router';
import ScrollButton from '@/components/ScrollButton';

const Layout = ({ children }: { children: ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <>
      <div className={styles.container} ref={root} id='root'>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
      <ScrollButton />
    </>
  );
};

export default Layout;
