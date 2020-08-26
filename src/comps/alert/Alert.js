import React, { useState } from 'react'


function Alert (props){
    return (
        <div className="alert flex-col-center">
            <strong>Pomodoro period complete.</strong>
            <button onClick={props.alert} className="btn"> <strong>Add check mark to task</strong> </button>
        </div>
    )
}

export default Alert
