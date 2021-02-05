import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NewLesson from "./pages/NewLesson";
import CurriculumOverview from "./pages/CurriculumOverview";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import Navbar from "./components/Nav";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/newlesson" exact={true} component={NewLesson} />
          <Route path="/curriculumoverview" exact={true} component={CurriculumOverview} />
          <Route path="/profile" exact={true} component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
