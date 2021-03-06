import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Tasks(props) {
      

  return (
    <div>
      <form onSubmit={props.addTask} className="flex-col-center">
        <strong>Add tasks in the order you want to work on them</strong>
        <div className="flex-row-center mrgn">
          <TextField
            variant="outlined"
            onChange={props.updateTaskName}
            id="task-input"
            value={props.task}
            label="task"
          />
          <button type="submit" className="btn med-btn">
            Add
          </button>
        </div>
      </form>

      <List>
        {props.tasklist.map((val, i) => {
          return (
            <div key={i}>
              <ListItem>
                <ListItemText primary={val} />
                {props.checks.map((item, j) => {
                  return <CheckCircleOutlineIcon key={j} />;
                })}
                <ListItemSecondaryAction
                  onClick={() => {
                    props.removeTask(i);
                  }}
                >
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default Tasks;
