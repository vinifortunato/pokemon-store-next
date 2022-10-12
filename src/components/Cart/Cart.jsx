
import styles from './Cart.module.css'
import { useSelector } from 'react-redux';

const Cart = ({ open, onClose, onRemove }) => {
    const items = useSelector(({ cart }) => cart);

    const handleClose = () => {
        onClose();
    }

    const handleRemove = (item) => {
        onRemove(item);
    }

    let subtotal = 0;
    let totalItems = 0;
    const numberFormat = new Intl.NumberFormat(
        'pt-BR',
        { 
            style: 'currency', 
            currency: 'BRL'
        }
    );
    const map = items.map((item) => {
        subtotal += item.price * item.amount;
        totalItems += item.amount;

        const formatedPrice = numberFormat.format(item.price);
        return (
            <li key={item.name} className={styles.cartItem}>
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
                    <button type="button" onClick={() => handleRemove(item)}>Remover</button>
                </div>
            </li>
        )
    })

    const subtotalFormated = numberFormat.format(subtotal);
    return(
        <div className={`${styles.cartWrapper} ${open ? `${styles.open}` : ''}`}>
            <button type="button" onClick={handleClose}>Fechar</button>
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