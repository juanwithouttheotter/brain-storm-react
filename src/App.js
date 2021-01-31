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


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newlesson" exact={true} component={NewLesson} />
        <Route path="/curriculumoverview" exact={true} component={CurriculumOverview} />
        <Route path="/profile" exact={true} component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
