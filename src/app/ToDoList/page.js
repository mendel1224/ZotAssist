'use client';
import React from 'react';
import { Box, TextField, Button, Grid2 } from '@mui/material';
import {useState} from 'react';

export default function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = () => {
        setTasks(prev=> [...prev, task]);
        setTask('');
    };

    const handleDelete = (index) => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setTask(tasks[index]);
        setEditIndex(index);
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
                            onClick={handleAdd}
                        > 
                            Add Task
                        </Button>

                    </Grid2>

                    <Grid2 size={12}>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={'tasks${index}'}>
                                {task}
                                <Button
                                onClick={() => handleEdit(index)}
                                >EDIT
                                </Button>
                                <Button
                                onClick={() => handleDelete(index)}
                                >DELETE</Button>
                                </li>
                            ))}
                        </ul>
                    </Grid2>

                </Grid2>
        </Box>
    )
}