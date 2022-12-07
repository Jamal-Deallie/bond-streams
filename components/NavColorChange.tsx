import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type NavColorChangeProps = {
  children: ReactNode;
  preColor: string;
  postColor: string;
};

const NavColorChange = ({
  children,
  preColor,
  postColor,
}: NavColorChangeProps) => {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: 'top-=80',
        end: '+=400',
        toggleActions: 'play complete reverse reset',
      },
    });

    tl.current.fromTo(
      '#navbar',
      { backgroundColor: preColor },
      {
        backgroundColor: postColor,
        ease: 'sine.inOut',
        duration: 0.2,
      }
    );
  }, []);
  return <div ref={root}>{children}</div>;
};

export default NavColorChange;
