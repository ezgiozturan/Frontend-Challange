import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "../src/components/css/App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
