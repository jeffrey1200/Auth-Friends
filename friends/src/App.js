import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";
function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/friends" component={FriendList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
