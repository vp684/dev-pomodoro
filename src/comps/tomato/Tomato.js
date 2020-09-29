import React, { useState, useEffect } from "react";

function Tomato(props) {
    //console.log(props.time)
    const [time, setTime] = useState('');
    const [topstyles, setStyles] = useState({
        fontSize: "50px",
        width: "50px",
        height: "50px",
        backgroundColor: "green",
        borderRadius: "5px"
    });

    useEffect(() => { 
    
        let digit = time[time.length -1]
        let radius = (digit * 3 > 0 ? (digit *3): 1) + "px"
        //console.log(radius)
        setStyles({
            fontSize: "50px",
            width: "50px",
            height: "50px",
            backgroundColor: "green",
            borderRadius: radius
        })
    }, [props.time]);

    return (
        <div style={topstyles}>

        </div>
    
    );
}

export default Tomato;
