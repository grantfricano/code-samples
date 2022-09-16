import './App.css';
import { useEffect, useState } from 'react';

function Login() {

    let [loginName, setLoginName] = useState('');
    let [password, setPassword] = useState('');
    let [token, setToken] = useState('');

    function Authenticate() {
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

return (
    <div className="App">

    <div className='login-form'>
    <h1>Enter User Name and Password</h1>
    <label>User Name</label>
    <input type="text" placeholder="User Name" value={loginName} onChange={(event) => setLoginName(event.target.value)}></input>

    <label>Password</label>
    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}></input>

    <button onClick={Authenticate}>Login</button>
    <br/><br/>
    </div>
    </div>
    );
}

export default Login;