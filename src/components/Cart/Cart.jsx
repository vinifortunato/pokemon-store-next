
import styles from './Cart.module.css'

const Cart = ({ open, onClose, onRemove }) => {
    const items = [];

    const handleClose = () => {
        onClose();
    }

    const handleRemove = (item) => {
        onRemove(item);
    }

    let total = 0;
    const map = items.map((item) => {
        total += item.price;
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
                    <p>{item.price}</p>
                    <button type="button" onClick={() => handleRemove(item)}>Remover</button>
                </div>
            </li>
        )
    })

    return(
        <div className={`cart-wrapper${open ? ' open' : ''}`}>
            <button type="button" onClick={handleClose}>Fechar</button>
            <ul>
                {map}
            </ul>
            <p>{`Total: ${total}`}</p>
        </div>
    )
}

export default Cart; 