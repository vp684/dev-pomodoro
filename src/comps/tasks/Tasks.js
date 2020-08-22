import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

function Tasks(props) {
    const [tasklist, setTask] = useState([])
    const [task, setTaskName] = useState('')

    const addTask = (e) =>{
        e.preventDefault()  
        if(task !== '' && !tasklist.includes(task)){
            setTask([...tasklist, task])
        }
        setTaskName('')                
    }

    const updateTaskName = (e) =>{    
        setTaskName(e.target.value)     
    }

    const removeTask = (index) => {
        let updatedTasks = [...tasklist]

        updatedTasks.splice(index, 1)
        setTask(updatedTasks)
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <strong>Add tasks in the order you want to work on them</strong>
                <TextField variant="outlined" onChange={updateTaskName} id="task-input" value={task} label="task"/>
                <Button type="submit">Add</Button>
            </form>

            <List>
                {tasklist.map((val, i) => {
                    return (
                        <div key={i}>
                            <ListItem>
                                <ListItemText primary={val}/>   
                                <ListItemSecondaryAction onClick={()=>{removeTask(i)}}>
                                    <IconButton edge="end" aria-label="delete" >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>                                             
                            </ListItem>
                          
                        </div>
                    )
                })}
            </List>

        </div>
        
    )
}

export default Tasks
