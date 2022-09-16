import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  let [users, setUsers] = useState([]);
  let [username, setUsername] = useState('');
  let [age, setUserAge] = useState('18');
  let [id, setUserId] = useState();

  let [products, setProducts] = useState([]);
  let [productName, setProductName] = useState('');
  let [productNumber, setProductNumber] = useState('');
  let [productId, setProductId] = useState();

  let [loginName, setLoginName] = useState('');
  let [password, setPassword] = useState('');
  let [token, setToken] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:5000/users/')
  //   .then((response) => response.json())
  //   .then((data) => {setUsers(data)});

  //   fetch('http://localhost:5000/products/')
  //   .then((response) => response.json())
  //   .then((data) => {setProducts(data)});
  // },[]);

  function Login() {
    const request = {
      username: loginName,
      password: password
    }
    fetch('http://localhost:5000/token/', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(request)
    })
      .then((response) => response.json())
      .then((data) => {setToken(data.token)})
  }
  
  function DeleteUser(userId){
    fetch('http://localhost:5000/users/' + userId, {
      method: 'DELETE', 
      headers: { 'content-type': 'application/json',
      'Authorization': token}
    })
    .then((response) => response.json())
    .then((data) => {setUsers(data)})
  }
  
  function DeleteProduct(productId) {
    fetch('http://localhost:5000/products/' + productId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json',
      'Authorization': token},
    })
    .then((response) => response.json())
    .then((data) => {setProducts(data)})
  }

  function SetEditUser(user) {
    setUserAge(user.age);
    setUsername(user.name);
    setUserId(user.id);
  }

  function SetEditProduct(product) {
    setProductName(product.name);
    setProductNumber(product.number);
    setProductId(product.id);
  }

  function CreateProduct() {

    const request = {
      name: productName,
      number: productNumber
    }

    fetch('http://localhost:5000/products/', {
      method: 'POST',
      headers: { 'content-type': 'application/json',
      'Authorization': token
    },
      body: JSON.stringify(request)
    })
      .then((response) => response.json())
      .then((data) => {setProducts(data)})
  }
  
  function CreateUser(){
    const request = {
      name: username,
      age: age
    }

    fetch('http://localhost:5000/users/', {
      method: 'POST',
      headers: { 'content-type': 'application/json',
      'Authorization': token},
      body: JSON.stringify(request)
    })
      .then((response) => response.json())
      .then((data) => {setUsers(data)})
  }

  function UpdateProduct() {
    const request = {
      id: productId,
      name: productName,
      number: productNumber
    };

    fetch('http://localhost:5000/products/', {
      method: 'PUT',
      headers: { 'content-type': 'application/json'
      ,
      'Authorization': token},
      body: JSON.stringify(request)
    })
    .then((response) => response.json())
    .then((data) => { setProducts(data)})
  }
  function UpdateUser() {
    const request = {
      id: id,
      name: username,
      age: age
    };

    fetch('http://localhost:5000/users/', {
      method: 'PUT',
      headers: { 'content-type': 'application/json',
      'Authorization': token},
      body: JSON.stringify(request)
    })
    .then((response) => response.json())
    .then((data) => { setUsers(data)})
  }

  return (
    <div className="App">

      <div className='login-form'>
      <h1>Enter User Name and Password</h1>
      <label>User Name</label>
      <input type="text" placeholder="User Name" value={loginName} onChange={(event) => setLoginName(event.target.value)}></input>
    
      <label>Password</label>
      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
      
      <button onClick={Login}>Login</button>
      <br/><br/>
      </div>
      <br />
      <br />
      <br />

    <div className='submission-container'>
      <div className='create-user'>
        <h1>Create User</h1>
        <label>Name</label>
        <input type="text" placeholder='Student Name' value={username} onChange={(event) => setUsername(event.target.value)}></input>
      
        <label>Age</label>
        <input type="number" placeholder='Student Age' value={age} onChange={(event) => setUserAge(event.target.value)}></input>
      
        <button type='submit' onClick={CreateUser}>Save</button>
        <button type="submit" onClick={UpdateUser}>Update</button>
        <br /><br />
        <table border='1' className='display-table'>
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

        <br />
      </div>
      <div className='create-product'>
        <h1>Create Product</h1>
        <label>Name</label>
        <input type="text" placeholder='Product Name' value={productName} onChange={(event) => setProductName(event.target.value)}></input>
      
        <label>Number</label>
        <input type="number" placeholder='Product Number' value={productNumber} onChange={(event) => setProductNumber(event.target.value)}></input>

        <button type='submit' onClick={CreateProduct}>Save</button>
        <button type="submit" onClick={UpdateProduct}>Update</button>
        <br/><br />
        <table border='1' className='display-table'>
        <tr>
          <th>Product</th>
          <th>Number</th>
        </tr>
        {
          products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.number}</td>
              <td><button onClick={() => {DeleteProduct(product.id)}}>Delete</button></td>
              <td><button onClick={() => {SetEditProduct(product)}}>Edit</button></td>
            </tr>
          ))
        }
      </table>
      <br />
      </div>
    </div>  
    
    <br/>
    <div>


      <br/><br/>
    
      </div>
    </div>
  );
}

export default App;
