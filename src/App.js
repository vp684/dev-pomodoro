import React from "react";
import "./App.css";

import ClockOpts from "./comps/clock/ClockOpts";
import About from "./comps/about/About";

function App() {
  return (
    <div className="app flex-col-center">
      <p id="title">Pomodoro Timer</p>
      <ClockOpts className="clock" />
      <About />
    </div>
  );
}

export default App;
