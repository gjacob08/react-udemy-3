import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from '../../css/UserForm.module.css';

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameUpdateHandler = (event) => {
    // if (event.target.value.trim().length > 0) {
    //   setIsUsernameValid(true);
    // }

    setEnteredUser(event.target.value);
  };

  const ageUpdateHandler = (event) => {
    // if (event.target.value.trim().length > 0) {
    //   setIsAgeValid(true);
    // }

    setEnteredAge(event.target.value);
  };

  const saveUserHandler = (event) => {
    event.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    //by adding a + sign, it forces the value to be converted to a number
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).'
      });
      return;
    }
    //We're expecting to execute a function here
    //which is handled by the custom event handler onAddUser from App.js
    props.onAddUser(enteredUser, enteredAge);

    setEnteredUser('');
    setEnteredAge('');
  };

  const errHandler = () => {
    setError(null);
  }
  
  return (
    <div>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errHandler}
      />}
      <Card className={styles.formInput}>
        <form onSubmit={saveUserHandler}>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            type='text'
            value={enteredUser}
            onChange={usernameUpdateHandler}
          />
          {/* {!isUsernameValid ? <ErrorModal /> : ''} */}
          <label htmlFor='age'>Age (Years): </label>
          <input
            id='age'
            type='number'
            min='0'
            value={enteredAge}
            onChange={ageUpdateHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
