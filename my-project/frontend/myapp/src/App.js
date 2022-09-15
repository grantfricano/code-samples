import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  let [users, setUsers] = useState([]);
  let [username, setUsername] = useState('');
  let [age, setUserAge] = useState('18');
  let [id, setUserId] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/users/')
    .then((response) => response.json())
    .then((data) => {setUsers(data)});
  },[]);
  
  function DeleteUser(userId){
    fetch('http://localhost:5000/users/' + userId, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {setUsers(data)})
  }

  function SetEditUser(user) {
    setUserAge(user.age);
    setUsername(user.name);
    setUserId(user.id);
  }

  function CreateUser(){
    const request = {
      name: username,
      age: age
    }

    fetch('http://localhost:5000/users/', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(request)
    })
      .then((response) => response.json())
      .then((data) => {setUsers(data)})
  }

  function UpdateUser() {
    const request = {
      id: id,
      name: username,
      age: age
    };

    fetch('http://localhost:5000/users/', {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(request)
    })
    .then((response) => response.json())
    .then((data) => { setUsers(data)})
  }

  return (
    <div className="App">
      <h1>Create User</h1>
      <label>Name</label>
      <input type="text" placeholder='Student Name' value={username} onChange={(event) => setUsername(event.target.value)}></input>
     
      <label>Age</label>
      <input type="number" placeholder='Student Age' value={age} onChange={(event) => setUserAge(event.target.value)}></input>

      <button type='submit' onClick={CreateUser}>Save</button>
      <button type="submit" onClick={UpdateUser}>Update</button>
     
    <div>
      
    </div>
    
      <table border='1'>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {
          users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td><button onClick={() => {DeleteUser(user.id)}}>Delete</button></td>
              <td><button onClick={() => {SetEditUser(user)}}>Edit</button></td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;
