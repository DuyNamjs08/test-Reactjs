import React from "react";
import Login from "./componets/Login";
import SignUp from "./componets/SignUp";
import Nav from "./nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
  <Link to='/login'>Click here</Link>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <h1>hello Nam</h1>
          </div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
