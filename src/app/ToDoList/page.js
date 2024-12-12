'use client';
import React from 'react';
import { Box, TextField, Button, Grid2, List, ListItem, Checkbox} from '@mui/material';
import {useState} from 'react';
import { useEffect } from 'react';

export default function ToDoList(){
    //Setting up variables and list for TodoList
    const [tasks, setTasks] = useState(() => {

        const saved = localStorage.getItem("todolist") || "[]";
        const initialValue = JSON.parse(saved)
        return initialValue || "";
        //Fetching list data from localstorage

    });
    const [task, setTask] = useState('');
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState(null);
    //Variables showing if task has been edited/has not

    useEffect(() =>{
        localStorage.setItem("todolist", JSON.stringify(tasks));
        }, [tasks]);
    //Stores tasks in localstorage

    const handleAction = () => {
        if(!isEdited){
            setTasks([...tasks, {val: task, done: false, id: new Date().getTime()} ]);
        }
        else{
            setTasks([...tasks, {val: task, done: false, id: editedId}]);
        }
        setTask("");
        setIsEdited(false);
    };
    //Handles when Add task or Edit button is pressed depending on which it is, then clears

    const handleDelete = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };
    //Deletes a task from the list

    const handleDone = (id) => {
        const updated = tasks.map((task) => {
            if (task.id === id) {
              task.done = !task.done;
            }
            return task;
          });
          setTasks(updated);
    }
    //Updates when task is marked as finished (or changed to unfinished)

    const handleEdit = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        const editTask = tasks.find((task) => task.id === id);
        setEditedId(editTask.id);
        setTask(editTask.val);
        setTasks(newTasks);
        setIsEdited(true);
    };
    //Updates a task when edited

    //Display code, used box with grid2 primarily to organize
    return (
        <Box>
            <Grid2 container spacing = {2}>
                    <Grid2
                        size={6}>
                        <TextField
                            id='outlined-basic'
                            label='Type New Task'
                            variant='outlined'
                            value={task}
                            sx={{width: '100%'}}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    
                    </Grid2>

                    <Grid2 
                        size={6}
                        >
                    
                        <Button 
                            variant ='contained'
                            sx={{
                                height:'100%', width: '100%'
                            }}
                            onClick={handleAction}
                            disabled={task ? false : true}
                            //Button disables itself if there is input typed into the text field, if not makes itself pushable
                        > 
                            {isEdited ? "Edit" : "Add Task"}
                        </Button>
                        {/* When a task is being edited, changes the add task button to edit, if not, then change back to add Task */}

                    </Grid2>

                    <Grid2 size={12}>
                        <List>
                            {tasks.map((task) => {
                                return(
                                    <ListItem key={task.id} style={{fontFamily: 'arial', fontSize: 24}}>
                                        <Checkbox>
                                            onClick{() => handleDone(task.id)}
                                            checked={task.done}
                                        </Checkbox>
                                        {task.val}
                                        <Button
                                        onClick={() => handleEdit(task.id)}
                                        >EDIT
                                        </Button>
                                        <Button
                                        onClick={() => handleDelete(task.id)}
                                        >DELETE</Button>
                                    </ListItem>
                                );
                            })}
                            {/* Handles displaying the list, with buttons handling edit, delete functions and a checkbox handling done */}
                        </List>
                    </Grid2>

                </Grid2>
        </Box>
    )
}