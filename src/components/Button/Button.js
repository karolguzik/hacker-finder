import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <button className={styles.button} type='submit'>
      Confirm
    </button>
  );
};

export default Button;
