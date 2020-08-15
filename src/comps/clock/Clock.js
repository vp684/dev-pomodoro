import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
let currTime = new Date(2000, 0, 1, 1, 25, 0, 0).getTime()

function Clock() {   
    const [pause, setPause] = useState(true)   
    const [duration, setDuration] = useState(true)
    
    const toggleTimer = () => {         
        setPause(!pause)                     
    }
    
    const changeMins = (mins) => {  
        currTime = new Date(2020, 0, 1, 1, mins, 0, 0).getTime()  
        setPause(true)
        setDuration(!duration)                                 
    }

    const calcTime = (time) => {
        let mins = new Date(time).getMinutes()
        let secs = new Date(time).getSeconds()

        if(mins === 0 && secs === 0){
            setPause(true)
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
        <div className="clock-container">
            <div id="timer-mins"> {displayTime} </div>               
            <Button onClick={toggleTimer}>{pause ? "Start": "Pause"}</Button>   
            <Button onClick={()=>{changeMins(25)}}>Pomodoro</Button>      
            <Button onClick={()=>{changeMins(5)}}>Short Break</Button>     
            <Button onClick={()=>{changeMins(20)}}>Long Break</Button>                                
        </div>
    )
}

export default Clock
