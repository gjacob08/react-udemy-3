import React from 'react';
import styles from  '../../css/Card.module.css';

const Card = (props) => {
  return(
    //to be able to add class to this custom component
    //we will use back ticks and props.className inside the className
    //to inherit the class from other css modules
      <div className={`${styles.card} ${props.className}`}>
        {props.children}
      </div>
  );
};

export default Card;