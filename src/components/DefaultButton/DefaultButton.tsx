import styles from './DefaultButton.module.css'
import { DefaultButtonProps } from './DefaultButton.types';

const DefaultButton = ({ type = 'button', label = 'Label', onClick }: DefaultButtonProps) => {
    return (
        <button className={styles.defaultButton} type={type} onClick={onClick}>{label}</button>
    )
}

export default DefaultButton;
