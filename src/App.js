import React from 'react';
import './App.css';

import ClockOpts from './comps/clock/ClockOpts'
import Clock from './comps/clock/Clock'
import About from './comps/about/About'

function App() {
  return (
    <div className="app">
      <p id="title">Pomodoro Timer</p>
      <ClockOpts className="clock"/>
      <About/>
    </div>
  );
}

export default App;
