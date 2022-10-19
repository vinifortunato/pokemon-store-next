import { useCallback } from 'react';
import styles from './DefaultButton.module.css'
import { DefaultButtonProps } from './DefaultButton.types';

const DefaultButton = ({ type = 'button', label = 'Label', onClick, testId = 'button-default' }: DefaultButtonProps) => {
  const handleClick = useCallback(()  => {
    onClick && onClick();
  }, [onClick]);

  return (
        <button
          className={styles.defaultButton}
          type={type}
          onClick={handleClick}
          data-testid={testId}
        >
          {label}
        </button>
    )
}

export default DefaultButton;
