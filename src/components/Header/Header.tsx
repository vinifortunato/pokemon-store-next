import { useCallback } from 'react';
import styles from './Header.module.css'
import { HeaderProps } from './Header.types';

const Header = ({ onCartClick }: HeaderProps) => {
  const handleClick = useCallback(() => {
    onCartClick && onCartClick();
  }, [onCartClick]);

  return (
    <header
      className={styles.header}
      data-testid="header"
    >
      <p className={styles.headerMenu}>Menu</p>
      <p className={styles.headerTitle}>Pokemon Store</p>
      <button
        className={styles.headerCart}
        type="button"
        onClick={handleClick}
        data-testid="header-button"
      >
        Carrinho
      </button>
    </header>
  );
}

export default Header;
