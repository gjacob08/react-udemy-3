import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from '../../css/UserForm.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const saveUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    //by adding a + sign, it forces the value to be converted to a number
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      });
      return;
    }
    //We're expecting to execute a function here
    //which is handled by the custom event handler onAddUser from App.js
    props.onAddUser(enteredName, enteredUserAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errHandler}
        />
      )}
      {/* If we access the value of the inputs via ref, 
          it becomes uncontrolled components because
          their internal state is not controlled by react

          Controlled approach is when you can manage the state
          of the components
       */}
      <Card className={styles.formInput}>
        <form onSubmit={saveUserHandler}>
          <label htmlFor="username">Username: </label>
          <input id="username" type="text" ref={nameInputRef} />
          {/* {!isUsernameValid ? <ErrorModal /> : ''} */}
          <label htmlFor="age">Age (Years): </label>
          <input id="age" type="number" min="0" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
