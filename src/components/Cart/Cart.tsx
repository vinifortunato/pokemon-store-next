
import styles from './Cart.module.css'
import { useSelector } from 'react-redux';
import { CartProps } from './Cart.types';
import { Pokemon } from '../../types/Common.types';
import { useCallback } from 'react';
import { AppState } from '../../store/store.types';

const Cart = ({ open = false, onClose, onRemove }: CartProps) => {
    const items = useSelector(({ cart }: AppState) => cart);

    const handleClose = useCallback(() => {
      onClose && onClose();
    }, [onClose]);

    const handleRemove = useCallback((pokemon: Pokemon) => {
      onRemove && onRemove(pokemon);
    }, [onRemove]);

    let subtotal = 0;
    let totalItems = 0;
    const numberFormat = new Intl.NumberFormat(
        'pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    );
    const map = items.map((item: Pokemon) => {
        subtotal += item.price * item.amount;
        totalItems += item.amount;

        const formatedPrice = numberFormat.format(item.price);
        return (
            <li key={item.name} className={styles.cartItem} data-testid={item.name}>
                <div className={styles.cartItemImageWrapper}>
                    <img
                        alt={item.name}
                        className={styles.cartItemImage}
                        src={item.sprite}
                    />
                </div>
                <div className={styles.cartItemDetails}>
                    <p>{item.name}</p>
                    <p>{`x${item.amount} ${formatedPrice}`}</p>
                    <button
                      type="button"
                      onClick={() => handleRemove(item)}
                      data-testid={`${item.name}-button`}
                    >
                      Remover
                    </button>
                </div>
            </li>
        )
    })

    const subtotalFormated = numberFormat.format(subtotal);
    return(
      <div
        className={`${styles.cartWrapper} ${open ? `${styles.open}` : ''}`}
        data-testid="cart"
      >
        <button type="button" onClick={handleClose} data-testid="cart-button-close">Fechar</button>
        <div className={styles.scrollableContent}>
            <ul>
                {map}
            </ul>
        </div>
        <p>{`Items: ${totalItems}`}</p>
        <p>{`Subtotal: ${subtotalFormated}`}</p>
      </div>
    )
}

export default Cart;
