import React from 'react'


function Clock(props) {  
  
    return (
        <div className="clock flex-col-center">
            <div id="timer-mins"> {props.time} </div>                                                          
        </div>
    )
}

export default Clock
