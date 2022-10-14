import styles from './Header.module.css'
import { HeaderProps } from './Header.types';

const Header = ({ onCartClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.headerMenu}>Menu</p>
      <p className={styles.headerTitle}>Pokemon Store</p>
      <button
        className={styles.headerCart}
        type="button"
        onClick={onCartClick}
      >
        Carrinho
      </button>
    </header>
  );
}

export default Header;
