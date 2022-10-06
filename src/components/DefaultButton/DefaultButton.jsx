import styles from './DefaultButton.module.css'

const DefaultButton = ({ type = 'button', label = 'Label', onClick }) => {
    return (
        <button className={styles.defaultButton} type={type} onClick={onClick}>{label}</button>
    )
}

export default DefaultButton;