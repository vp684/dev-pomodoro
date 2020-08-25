import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

function Alert (props){
    return (
        <div className="alert flex-col-center">
            <strong>Pomodoro period complete.</strong>
            <Button onClick={props.alert}> <strong>Add check mark to task</strong> </Button>
        </div>
    )
}

export default Alert
