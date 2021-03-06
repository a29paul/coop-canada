import React from "react";
import logo from "./logo.svg";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";
import JobDetail from "./components/JobDetail";
import PleaseLogin from "./components/PleaseLogin"
import { authRef } from "./components/Firebase";
import { useState, useEffect } from "react";
import SignUp from "./components/Sign-Up";
function App() {

 
  const [isOnLoginPage, setIsOnLoginPage] = useState(false);
  const onLoginPage = () => {
    setIsOnLoginPage(true);
  };
  const notOnLoginPage = () => {
    setIsOnLoginPage(false)
  }
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>


      <Router className="App">
        {!isOnLoginPage && (
          <Navbar
            isOnLoginPage={isOnLoginPage}
          ></Navbar>
        )}
        <Switch>
          <Route path="/login">
            <Login onLoginPage={onLoginPage} />
          </Route>
          <Route path="/jobs">
            <Jobs  notOnLoginPage= {notOnLoginPage} />
          </Route>
          <Route path="/job">
            <JobDetail />
          </Route>
          <Route path="/profile">
            <Profile
              firstName="Adam"
              lastName="Cooke"
              notOnLoginPage={notOnLoginPage}
            />
          </Route>
          <Route path="/signup">
            <SignUp onLoginPage={onLoginPage} />
          </Route>
          <Route path="/">
            <PleaseLogin></PleaseLogin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
