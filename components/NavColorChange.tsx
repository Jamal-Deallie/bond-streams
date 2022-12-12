import { useRef, ReactNode, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
type NavColorChangeProps = {
  children: ReactNode;
  preColor?: string;
  postColor: string;
};

const NavColorChange = ({
  children,
  preColor = 'transparent',
  postColor,
}: NavColorChangeProps) => {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { pathname } = useRouter();
  console.log(pathname);
  useEffect(() => {
    if (pathname === '/' || '/browse') {
      document.body.classList.add('nav_change');
      gsap.registerPlugin(ScrollTrigger);
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.nav_change',
          start: '+=120 top',
          toggleActions: 'play none none reset',
        },
      });

      tl.current.fromTo(
        '#navbar',
        { backgroundColor: preColor },
        {
          backgroundColor: postColor,
          duration: 1,
          ease: 'sine.in',
        }
      );
    }
  }, [pathname, postColor, preColor]);
  return <div ref={root}>{children}</div>;
};

export default NavColorChange;
