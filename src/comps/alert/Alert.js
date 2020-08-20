import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

function Alert() {
    

    return (
        <div className="alert">
            <strong>Pomodoro period complete.</strong>
            <Button> <strong>OK</strong> </Button>
        </div>
    )
}

export default Alert
