import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Menu.module.scss';
import Link from 'next/link';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import { signOut } from 'next-auth/react';
import gsap from 'gsap';

type MenuProps = {
  name?: string | null;
};
const Menu = ({ name }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const label = useRef(null);
  const router = useRouter();
  const outside = useRef<HTMLDivElement | null>(null);

  const logOut = async () => {
    await signOut({
      callbackUrl: '/',
    });
  };

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ pause: true })
        .fromTo(
          root.current,
          { yPercent: -105 },
          { yPercent: 0, ease: 'power3.in' }
        )

        .to(outside.current, { display: 'block', opacity: 1 });
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
              logOut();
            }}>
            Sign Out
          </li>
        </ul>
      </div>
      <div className={styles.outside} ref={outside} onClick={openShopMenu} />
    </>
  );
};

export default Menu;
