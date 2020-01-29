import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const history = useHistory();

  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials.credentials)
      .then(res => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={credentials.credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
