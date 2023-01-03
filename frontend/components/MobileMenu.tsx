import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import useLockedBody from '@/src/hooks/useLockedBody';
import { gsap } from 'gsap';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import styles from '@/styles/components/MobileMenu.module.scss';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [locked, setLocked] = useLockedBody(true, 'root');

  const toggleLocked = () => {
    setLocked(!locked);
  };

  const top = useRef<HTMLUListElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const links = useRef<HTMLLIElement>(null);

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  const logOut = async () => {
    await signOut({
      callbackUrl: '/',
    });
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let links = gsap.utils.toArray('#link');
      gsap.set('#cont', { display: 'none', opacity: 0 });
      (tl.current = gsap
        .timeline({ pause: true })
        .to('#cont', {
          duration: 0.1,
          css: { display: 'block', opacity: 1 },
        })
        .fromTo(
          '#cont',
          { xPercent: 110 },
          {
            duration: 0.9,
            transformOrigin: 'right top',
            xPercent: 0,
            ease: 'power3.inOut',
            stagger: {
              amount: 0.3,
            },
          },
          '-=50%'
        )

        .fromTo(
          links,
          { yPercent: 100, opacity: 0 },
          {
            duration: 0.5,
            yPercent: 0,
            opacity: 1,
            stagger: {
              amount: 0.2,
            },
          }
        )),
        '+=1.5';
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl.current) {
      openMenu ? tl.current.play() : tl.current.reverse();
      toggleLocked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, openMenu]);

  return (
    <>
      <button className={styles.button} id='btn' onClick={openShopMenu}>
        MENU
      </button>

      <div className={styles.menu} id='cont'>
        <div className={styles.links}>
          <ul className={styles.top} ref={top}>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'/'}>Home</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'about'}>Search</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'about'}>Movies</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'schedule'}>Series</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'team'}>Documentaries</Link>
            </li>
          </ul>
          <div className={styles.bottom}>
            <ul>
              <li>
                <Link href='/'></Link>
                Edit Profile
              </li>
              <li>
                <Link href='/'>Account</Link>
              </li>
              <li>
                <Link href='/'>Help</Link>
              </li>
              <li
                role='button'
                onClick={e => {
                  // e.preventDefault();
                  // signOut({ callbackUrl: '/' });\
                  logOut();
                }}>
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
