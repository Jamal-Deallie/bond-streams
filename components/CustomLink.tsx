import { useState, useEffect, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from '@/styles/components/NavLink.module.scss';

type CustomLinkProps = LinkProps & {
  children: ReactNode;
};

const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  const { asPath, isReady } = useRouter();
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      linkPathname === activePathname ? setActive(true) : setActive(false);
    }
  }, [asPath, isReady, props.as, props.href]);

  return (
    <Link {...props} className={cn([styles.link], active && [styles.active])}>
      {children}
    </Link>
  );
};

export default CustomLink;
