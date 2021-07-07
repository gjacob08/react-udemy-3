import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


const App = () => {
  const [usersList, setUsersList] = useState([]); 

  const addUserHandler = (uName, uAge) => {
    //when your state update relies on the previous state
    //you'd want to use an alternative form of setUsersList
    //use the function form where you pass a function to setUserList
    //and that function will automatically get the previous latest snapshot
    //when react performs the state update
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {
        id: Math.random().toString(),
        name: uName,
        age: uAge,
      }]
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
