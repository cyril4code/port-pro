import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
const App = () => (
  <Router>
    <Route path="/" exact component={Join}></Route>
    <Route path="/chat" exact component={Join}></Route>
  </Router>
);

export default App;
