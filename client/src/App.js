import React from "react";
import Footer from "./components/Footer";
import CommunityPage from "./pages/CommunityPage";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Jumbotron from "./components/Jumbotron"
import Home from "./components/Home"

import EventFormPage from "./components/EventFormPage/index";

import "./App.css" 


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

          <Route exact path="/YourCommunity" 
            component={CommunityPage} />
          
          <Route exact path="/CreateEvent"
           component={EventFormPage} />

        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
