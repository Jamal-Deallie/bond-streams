import {
  ButtonHTMLAttributes,
  ReactElement,
  useCallback,
  ReactNode,
} from 'react';
import styles from '@/styles/components/button.module.scss';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  onClick?: () => void;
  icon?: ReactElement;
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'outline';
  isLoading?: boolean;
}

const Button = ({
  children,
  icon,
  isLoading = false,
  className,
  onClick,
  variant,
  ...rest
}: Props) => {
  const getStyle = useCallback(() => {
    switch (variant) {
      case 'primary':
        return styles.primary;
        break;
      case 'secondary':
        return styles.secondary;
        break;
      case 'tertiary':
        return styles.tertiary;
        break;
      case 'transparent':
        return styles.transparent;
        break;
      case 'outline':
        return styles.outline;
        break;
    }
  }, [variant]);

  return (
    <button className={getStyle()} {...rest} onClick={onClick}>
      {isLoading ? (
        <>
          <span className={styles.loading} />
        </>
      ) : (
        <>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.label}>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
