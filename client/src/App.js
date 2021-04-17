import React from "react";
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron"
import Home from "./components/Home"


function App() {
  return (
    <Router>
      <div>

        <Switch>
          
          <Route exact path={["/"]}>
            <Jumbotron />
            <Home />
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>
          
          <Route exact path="/signup">
            <Signup/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
