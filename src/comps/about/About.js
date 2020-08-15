import React from 'react'

function About() {
    return (
        <div className="about-container">
            <h2>The Pomodoro Technique</h2>
            <p>A Pomodoro clock can be used to break time spent working on a task into intervals of about 25 minutes 
                followed by small breaks of about 5 minutes</p>
            <ol>        
                <li>Decide on the task to be done.</li>
                <li>Set the pomodoro timer to 15-35 minutes.</li>
                <li>Work on the task.</li>
                <li>End work when the timer rings and put a checkmark on a piece of paper.</li>
                
                <li>If you have fewer than four checkmarks, take a short break (3–10 minutes) and
                     then return to step 2; otherwise continue to step 6.</li>
                
                <li>After four pomodoros, take a longer break (15–30 minutes),
                    reset your checkmark count to zero, then go to step 1.</li>
            </ol>
            <p></p>
        </div>
    )
}

export default About
