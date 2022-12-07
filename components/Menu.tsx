import Image from 'next/image';
import styles from '@/styles/components/menu.module.scss';
import Link from 'next/link';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { signOut } from 'next-auth/react';
import gsap from 'gsap';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const label = useRef(null);

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useIsomorphicLayoutEffect(() => {
    //@ts-ignore
    tl.current = gsap.timeline({ pause: true });

    let ctx = gsap.context(() => {
      //@ts-ignore
      tl.current
        .fromTo(
          root.current,
          { yPercent: -105 },
          { yPercent: 0, ease: 'power3.in' }
        )
        .to(
          label.current,
          { color: 'rgba(20, 20, 20, 1)', ease: 'circ.in' },
          '<'
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    //@ts-ignore
    openMenu ? tl.current.play() : tl.current.reverse();
  }, [tl, openMenu]);

  return (
    <>
      <div className={styles.container} onClick={openShopMenu}>
        <div className={styles.outer}>
          <p ref={label}>My Profile</p>
          <div role='button' className={styles.wrap}>
            <div className={styles.image}>
              <Image
                alt={'profile'}
                src={
                  'https://res.cloudinary.com/dp5qjsiff/image/upload/v1668395754/Bond/acct-icon_ghiffs.png'
                }
                fill
                sizes={'100vw, 33vw'}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.links} ref={root}>
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
              e.preventDefault();
              signOut({ callbackUrl: '/' });
            }}>
            Sign Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
