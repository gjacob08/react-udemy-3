import React from 'react';

import styles from '../../css/ErrorMessage.module.css';

const ErrorMessage = (props) => {
  return <p className={styles.invalid}>Invalid Data</p>;
};

export default ErrorMessage;
