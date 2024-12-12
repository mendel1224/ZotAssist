'use client';
import React from 'react';
import { Box, TextField, Button, Grid2, List, ListItem} from '@mui/material';
import {useState} from 'react';

export default function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState(null);

    const inputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAction = () => {
        if(!isEdited){
            setTasks([...tasks, {val: task, done: false, id: new Date().getTime() }]);
        }
        else{
            setTasks([...tasks, {val: task, done: false, id: editedId}]);
        }
        setTask("");
        setIsEdited(false);
    };

    const handleDelete = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const handleDone = (id) => {
        const updated = tasks.map((task) => {
            if (task.id === id) {
              task.done = !task.done;
            }
            return task;
          });
          setTasks(updated);
    }

    const handleEdit = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        const editTask = tasks.find((task) => task.id === id);
        setEditedId(editTask.id);
        setTask(editTask.val);
        setTasks(newTasks);
        setIsEdited(true);
    };

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
                        > 
                            {isEdited ? "Edit" : "Add Task"}
                        </Button>

                    </Grid2>

                    <Grid2 size={12}>
                        <List>
                            {tasks.map((task) => {
                                return(
                                    <ListItem key={task.id} style={{fontFamily: 'arial', fontSize: 24}}>
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
                        </List>
                    </Grid2>

                </Grid2>
        </Box>
    )
}