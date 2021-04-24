import React from "react";
import Footer from "./components/Footer";
import CommunityPage from "./pages/CommunityPage";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Login from "./components/Login/login.component"
import Signup from "./components/Signup";
import Jumbotron from "./components/Jumbotron"
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css";

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

          <Route exact path="/login" component={Login}/>
          
          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path={["/YourCommunity", "/events"]}
            component={CommunityPage} />
          
          <Route exact path="/CreateEvent"
           component={EventFormPage} />

           {/* <Route exact path="/events/:id" component={}/> */}
        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
