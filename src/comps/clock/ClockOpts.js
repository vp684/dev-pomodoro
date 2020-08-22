import React, { useState, useEffect } from 'react'

import Clock from './Clock'
import Tasks from '../tasks/Tasks'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Button from '@material-ui/core/Button'

import Alert from '../alert/Alert'


let currTime = new Date(2000, 0, 1, 1, 25, 0, 0).getTime()


function valuetext(value) {
    return `${value} Minutes`;
  }

function ClockOpts() {

    const [pomo, changePomo] = useState(1)
    const [short, changeShort] = useState(1)
    const [long, changeLong] = useState(1)    


    const [pause, setPause] = useState(true)   
    const [duration, setDuration] = useState(25)  
    const [showalert, setAlert] = useState(true)


 
  

    const PomoPeriod = (e, val) => {
        changePomo(val)        
    }

    const ShortPeriod = (e, val) => {
        changeShort(val) 
    }

    const LongPeriod = (e, val) => {
        changeLong(val) 
    }

    
    const toggleTimer = () => {         
        setPause(!pause)                     
    }
    
    const changeMins = (mins, type) => {  
        currTime = new Date(2020, 0, 1, 1, mins, 0, 0).getTime()  
        setPause(true)
        setDuration(type)                                 
    }

    const calcTime = (time) => {
        let mins = new Date(time).getMinutes()
        let secs = new Date(time).getSeconds()

        if(mins === 0 && secs === 0){
            setPause(true)
            setAlert(true)

            if(duration === "pomo"){
                console.log('alert')

            }
        }
        if(secs === 0) secs = "00"
        if(secs < 10 && secs > 0) secs = "0" + secs.toString()

        if(mins === 0) mins = "00"
        if(mins < 10 && mins > 0) mins = "0" + mins.toString()                

        return (mins + ":" + secs)
    }

    const [displayTime, setDisplayTime] = useState(calcTime())

    useEffect(() =>{               
        
        if(!pause){
            //subtract 1 sec and set new display time           
            currTime -= 1000
            let x_time = calcTime(currTime)                    
            setTimeout(() => {                       
                setDisplayTime(x_time)                                                                                                    
            }, 1000)                                         
        }else{
            // total mins changed
            let x_time = calcTime(currTime)         
            setDisplayTime(x_time) 
        }                       
                                     
    }, [pause, duration, displayTime])

    return (
        <div className="clock-opts">
            <Clock pomo={pomo} short={short} long={long} time={displayTime}/>
            <Button onClick={toggleTimer}>{pause ? "Start": "Pause"}</Button>   
            <Button onClick={()=>{changeMins(pomo)}}>Pomodoro</Button>      
            <Button onClick={()=>{changeMins(short )}}>Short Break</Button>     
            <Button onClick={()=>{changeMins(long )}}>Long Break</Button>     

            {showalert && <Alert/>}
            
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
            <Tasks />                
        </div>
    )
}

export default ClockOpts
