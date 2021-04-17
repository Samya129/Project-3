import React from "react";
import Footer from "./components/Footer";
import CommunityPage from "./pages/CommunityPage"
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <CommunityPage/>
      <Route exact path="/YourCommunity" component={CommunityPage} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
