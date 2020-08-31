import React, { useState, useEffect } from 'react'

function Clock(props) {  

    const [period, setPeriod] = useState('')

    useEffect(() => {
        if(props.period === 'pomo'){
            setPeriod('Pomodoro')            
        }
        if(props.period === 'short'){
            setPeriod('Short break')            
        }
        if(props.period === "long"){
            setPeriod('Long break')
        }

    }, [props.period])
  
    return (
        <div className="clock flex-col-center">
            <div id="pomo-period">{period} time left:</div>
            <div id="timer-mins"> {props.time} </div>                                                          
        </div>
    )
}

export default Clock
