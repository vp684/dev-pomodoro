import React, { useState, useEffect } from 'react'
import Clock from './Clock'
import Tasks from '../tasks/Tasks'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Alert from '../alert/Alert'

let currTime = new Date(2000, 0, 1, 1, 25, 0, 0).getTime()

function ClockOpts() {

    const [pomo, changePomo] = useState(1)
    const [short, changeShort] = useState(1)
    const [long, changeLong] = useState(1)    

    const [pause, setPause] = useState(true)   
    const [duration, setDuration] = useState("pomo")  
    const [showalert, setAlert] = useState(false)  
    const [alerttext, setAlertText] = useState({text:""})
    
    const [checks, setChecks] = useState([])

    const [active_task, setActiveTask] = useState('')


    const PomoPeriod = (e, val) => {
        console.log(val)
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
        let x_time = calcTime(currTime)         
        setDisplayTime(x_time)                                
    }

    const calcTime = (time) => {
        let mins = new Date(time).getMinutes()
        let secs = new Date(time).getSeconds()
        
        if(mins === 0 && secs === 0){
            setPause(true)           
            if(duration === "pomo"){    
                if(checks.length === 3){
                    setChecks([...checks, 1])
                    setAlertText({text:"Four Pomodoro periods completed. Start a long break"})
                    changeMins(long, "long")
                }                                    
                if(checks.length < 3){
                    console.log('here') 
                    setChecks([...checks, 1])                   
                    setAlertText({text:"Pomodoro period complete. Add check and start a short break"})
                    changeMins(short, "short")
                }  
                                                      
            }
            if(duration === "short"){
                setAlertText({text:"Small break completed. Start another pomodoro period."})
                changeMins(pomo, "pomo")
            }
            if(duration === "long"){
                if(checks.length > 3){
                    setChecks([])
                }
                setAlertText({text:"Long break completed. Reset Checks and start a Pomodoro period."})
                changeMins(pomo, "pomo")
            }
            setAlert(true) 
        }
        if(secs === 0) secs = "00"
        if(secs < 10 && secs > 0) secs = "0" + secs.toString()

        if(mins === 0) mins = "00"
        if(mins < 10 && mins > 0) mins = "0" + mins.toString()                

        return (mins + ":" + secs)
    }  
    
  

    const [displayTime, setDisplayTime] = useState(calcTime())

    const finishPomoPeriod = () => {
        setAlert(false)              
    }
    
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
                           
    }, 
    [pause, duration, displayTime])

    return (
        <div className="clock-opts">
            <Clock period={duration} time={displayTime}/>

            <div className="flex-col-center">
                <button onClick={toggleTimer} className="btn lrg-btn">{pause ? "Start": "Pause"}</button>                   
                <button onClick={()=>{changeMins(pomo, "pomo")}} className="btn lrg-btn">Pomodoro</button>      
                <button onClick={()=>{changeMins(short, "short" )}} className="btn lrg-btn">Short Break</button>     
                <button onClick={()=>{changeMins(long, "long" )}} className="btn lrg-btn">Long Break</button>  
                {showalert && <Alert alert={finishPomoPeriod} text={alerttext.text}/>}
            </div>                           
            
            <Typography id="discrete-slider" gutterBottom>
                Pomodoro Period
            </Typography>
            <Slider
                defaultValue={25}
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
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={LongPeriod}
                step={5}
                marks
                min={15}
                max={30}
            />
            <Tasks checks={checks}/>                
        </div>
    )
}

export default ClockOpts