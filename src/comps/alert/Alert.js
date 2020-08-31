import React from 'react'

function Alert (props){
    return (
        <div className="alert flex-col-center">
            <strong>{props.text}</strong>
            <button onClick={props.alert} className="btn"> <strong>OK</strong> </button>
        </div>
    )
}

export default Alert
