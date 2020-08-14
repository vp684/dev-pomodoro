import React from 'react';
import './App.css';

import ClockOpts from './comps/clock/ClockOpts'
import Clock from './comps/clock/Clock'

function App() {
  return (
    <div className="app">
      <Clock className="clock"/>
    </div>
  );
}

export default App;
