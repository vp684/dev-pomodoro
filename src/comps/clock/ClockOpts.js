import React, { useState, useEffect } from 'react'

import Clock from './Clock'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
    return `${value} Minutes`;
  }

function ClockOpts() {


    return (
        <div className="clock-container">
            <Clock />
            <Typography id="discrete-slider" gutterBottom>
                Pomodoro Period
            </Typography>
            <Slider
                defaultValue={25}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={5}
                marks
                min={15}
                max={35}
            />
            <Typography id="discrete-slider" gutterBottom>
                Short Break Period
            </Typography>
            <Slider
                defaultValue={3}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
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
                step={5}
                marks
                min={10}
                max={30}
            />
  
        </div>
    )
}

export default ClockOpts
