import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/appointment/Appointment";
import Erorr404 from "./pages/error/Erorr404";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Switch>
      
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Erorr404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
