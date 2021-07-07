import React from 'react';

import styles from '../../css/Button.module.css';

const Button = (props) => {
  return (
    // make the value of the type on the button dynamic
    // so it can be accessed by the parent prop
    // but make a fall back in case it cannot be set
    <button
      type={props.type || 'button'}
      className={styles.submit}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
