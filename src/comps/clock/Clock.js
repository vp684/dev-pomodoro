import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'



function Clock() {

   
    const [pause, setPause] = useState(false)
    const [start, setStart] = useState(false)
    const [currTime, setCurrTime] = useState(new Date(2000, 0, 1, 1, 24, 59, 0).getTime())

    const [displayTime, setDisplayTime] = useState('25:00')
   
    const startTimer = async () => {
        setStart(true)
    }
    
    const pauseTimer = () => {         
        setPause(!pause)              
    }


    useEffect(() =>{       
        let mins = null
        let secs = null
        if(start){
            setTimeout(()=>{
                if(!pause){
                    console.log(currTime)
                    
                    mins = new Date(currTime).getMinutes()
                    secs = new Date(currTime).getSeconds()
                    if(mins === 0 && secs === 0){
                        setPause(true)
                    }
                    if(secs === 0) secs = "00"
                    if(secs < 10 && secs > 0) secs = "0" + secs.toString()
                    if(mins === 0) mins = "00"
                    if(mins < 10 && mins > 0) mins = "0" + mins.toString()
                   
                    setDisplayTime(mins + ":" + secs)
                    setCurrTime(currTime - 1000)
                }
           
            }, 1000)
            
        }                
       
    }, [start, pause, currTime])

    return (
        <div className="clock-container">
                {displayTime}
                <Button onClick={startTimer}>Start</Button>  
                <Button onClick={pauseTimer}>Pause</Button>          
        </div>
    )
}

export default Clock
