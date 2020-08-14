import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'

import Clock from './Clock'


let currTime = new Date(2000, 0, 1, 1, 25, 0, 0).getTime()

function ClockOpts() {

    const [pause, setPause] = useState(false)
    const [start, setStart] = useState(false)        
    const [displayTime, setDisplayTime] = useState('5:00')

    const startTimer = async () => {
        setStart(true)    
    }
    
    const pauseTimer = () => {         
        setPause(!pause)                     
    }
    
    const changeMins = (mins) => {
       
        setPause(()=>{ return false})    
        setStart(()=>{ return false})

        currTime = new Date(2000, 0, 1, 1, mins, 0, 0).getTime()  
        
        setDisplayTime(mins + ":00")
    }



    return (
        <div className="clock-container">
            <Clock currTime={currTime} pause={pause} start={start} displayTime={displayTime} />
            <Button onClick={startTimer}>Start</Button>  
            <Button onClick={pauseTimer}>Pause</Button>  
            <Button onClick={()=>{changeMins(5)}}>5 Mins</Button>       
            <Button onClick={()=>{changeMins(25)}}>25 Mins</Button>       
        </div>
    )
}

export default ClockOpts
