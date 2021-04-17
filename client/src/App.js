import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron"
// import Header from "./components/Header"
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
          {/* <I'M THE LOGIN PAGE /> */}
          </Route>
          
          <Route exact path="/signup">
        {/* I'M THE SIGN PAGE */}
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
