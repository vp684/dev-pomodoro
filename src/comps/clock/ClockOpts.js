import React, { useState, useEffect } from 'react'

import Clock from './Clock'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
    return `${value} Minutes`;
  }

function ClockOpts() {

    const [pomo, changePomo] = useState(25)
    const [short, changeShort] = useState(5)
    const [long, changeLong] = useState(20)
  

    const PomoPeriod = (e, val) => {
        changePomo(val)        
    }

    const ShortPeriod = (e, val) => {
        changeShort(val) 
    }

    const LongPeriod = (e, val) => {
        changeLong(val) 
    }

    return (
        <div className="clock-container">
            <Clock pomo={pomo} short={short} long={long}/>
            <Typography id="discrete-slider" gutterBottom>
                Pomodoro Period
            </Typography>
            <Slider
                defaultValue={25}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={PomoPeriod}
                step={5}
                marks
                min={15}
                max={35}
            />
            <Typography id="discrete-slider" gutterBottom>
                Short Break Period
            </Typography>
            <Slider
                defaultValue={5}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={ShortPeriod}
                step={1}
                marks
                min={3}
                max={10}
            />
            <Typography id="discrete-slider" gutterBottom>
                Long Break Period
            </Typography>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={LongPeriod}
                step={5}
                marks
                min={15}
                max={30}
            />
  
        </div>
    )
}

export default ClockOpts
