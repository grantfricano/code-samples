import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  let [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/users/')
    .then((response) => response.json())
    .then((data) => {setUsers(data)});
  });
  
  return (
    <div className="App">
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
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;
