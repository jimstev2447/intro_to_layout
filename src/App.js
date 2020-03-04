import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Typography from "./components/Typograpy";
import ColourTheory from "./components/ColourTheory";
import MoblieView from "./components/MoblieView";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Intro path="/" />
        <Typography path="/typography" />
        <ColourTheory path="/colour" />
        <MoblieView path="/mobile" />
      </Router>
    </div>
  );
}

export default App;
