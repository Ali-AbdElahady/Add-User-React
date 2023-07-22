import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [userList,setUserList] = useState([])
  const addUers = (userInput) =>{
    setUserList(prev=>{
      return [...prev,userInput]
    })
    // console.log(userList);
  }
  return (
    <div>
      <AddUser onSubmitHandler={addUers} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
