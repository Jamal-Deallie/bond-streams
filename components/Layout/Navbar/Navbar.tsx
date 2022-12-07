import { useRef, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/navbar.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Menu from '@/components/Menu';
import { linkOptions } from '../../../data/data';
import CustomLink from '@/components/CustomLink';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';

type Props = {
  bgColor?: string;
};

const Navbar = ({ bgColor }: Props) => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  useIsomorphicLayoutEffect(() => {
    const sections = gsap.utils.toArray('#nav-color');
    console.log(sections);
  }, []);

  const navChildren = () => {
    if (!session?.user) {
      return (
        <div className={styles.container}>
          <Link href='/' className={styles.logo}>
            <svg
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1295.58 341.17'>
              <defs>
                <style>{'.cls-1{fill:#d4a25b }'}</style>
              </defs>
              <path
                className='cls-1'
                d='M315.33 174.09c-18 100.8-87 169.7-194 167-117-3-130.7-101.5-117-173 15-78 74-161.1 195-160 112 1 129 93 116 166Zm-132-99c-29-1-49 32-67 97-11.5 41.4-14 99 18 101 34.9 2.2 59.2-47 71-104 12-58 7-93-22-94ZM668.33 101.09c3-24 10-54 21-85 65 0 222 1 280 1 5 31-8 56-46 111-43 62.2-66 91-82 129-18 42.6-21 60-25 73h-160c-1-9-5.5-16.1 66-100 59.1-69.4 75-86.7 75-112 0-23-18-36-46-36-21 0-34 1-48 19h-35ZM648.43 172.89c-18 100.8-87 169.7-194 167-117-3-130.7-101.5-117-173 15-78 74-161.1 195-160 112 1 129 93 116 166Zm-132-99c-29-1-49 32-67 97-11.5 41.4-14 99 18 101 34.9 2.2 59.2-47 71-104 12-58 7-93-22-94ZM908.83 178.59c3.5-16.5 47.5-50.5 65-102 65.5.5 124 1 149.5 1.5 0 23-44 13-112.5 100.5-29.5-.5-75.5.5-102 0Zm49.5-44.5c-4 4-9 10-9 20 0 12 25 12 36 12 33.1 0 50-33 50-45 0-14-18.6-13-28-13-18 0-32 1-34 16-2.7 20 7 25 3 28-1.8 1.4-14-8-18-18ZM981.33 61.09c-1-15 3-28 7-36h139c4.3 4 4.8 3.5 9 7 42 1 76 1 100 1 9-11 5-21 4-32 7-2 18-1 26 1 7 13 12 21 18 31q6 1 9 2c3 6 3 19 0 27-47-1-264-1-312-1Z'
              />
            </svg>
          </Link>
          <div>
            <Link href='signin'>
              <Button variant='secondary'>Sign In</Button>
            </Link>
          </div>
        </div>
      );
    } else if (!session.user && loading) {
      return <div></div>;
    } else if (session?.user) {
      return (
        <div className={styles.container}>
          <div className={styles.options}>
            <Link href='/' className={styles.logo}>
              <svg
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1295.58 341.17'>
                <defs>
                  <style>{'.cls-1{fill:#d4a25b }'}</style>
                </defs>
                <path
                  className='cls-1'
                  d='M315.33 174.09c-18 100.8-87 169.7-194 167-117-3-130.7-101.5-117-173 15-78 74-161.1 195-160 112 1 129 93 116 166Zm-132-99c-29-1-49 32-67 97-11.5 41.4-14 99 18 101 34.9 2.2 59.2-47 71-104 12-58 7-93-22-94ZM668.33 101.09c3-24 10-54 21-85 65 0 222 1 280 1 5 31-8 56-46 111-43 62.2-66 91-82 129-18 42.6-21 60-25 73h-160c-1-9-5.5-16.1 66-100 59.1-69.4 75-86.7 75-112 0-23-18-36-46-36-21 0-34 1-48 19h-35ZM648.43 172.89c-18 100.8-87 169.7-194 167-117-3-130.7-101.5-117-173 15-78 74-161.1 195-160 112 1 129 93 116 166Zm-132-99c-29-1-49 32-67 97-11.5 41.4-14 99 18 101 34.9 2.2 59.2-47 71-104 12-58 7-93-22-94ZM908.83 178.59c3.5-16.5 47.5-50.5 65-102 65.5.5 124 1 149.5 1.5 0 23-44 13-112.5 100.5-29.5-.5-75.5.5-102 0Zm49.5-44.5c-4 4-9 10-9 20 0 12 25 12 36 12 33.1 0 50-33 50-45 0-14-18.6-13-28-13-18 0-32 1-34 16-2.7 20 7 25 3 28-1.8 1.4-14-8-18-18ZM981.33 61.09c-1-15 3-28 7-36h139c4.3 4 4.8 3.5 9 7 42 1 76 1 100 1 9-11 5-21 4-32 7-2 18-1 26 1 7 13 12 21 18 31q6 1 9 2c3 6 3 19 0 27-47-1-264-1-312-1Z'
                />
              </svg>
            </Link>
            <div className={styles.links}>
              <ul>
                {linkOptions.map(options => {
                  return (
                    <li key={options.id}>
                      <CustomLink href={options.url}>
                        {options.label}
                      </CustomLink>
                    </li>
                  );
                })}
              </ul>
              <div />
            </div>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      );
    }
  };
  return (
    <nav
      className={styles.nav}
      style={{ backgroundColor: bgColor }}
      id='navbar'>
      {navChildren()}
    </nav>
  );
};

export default Navbar;
