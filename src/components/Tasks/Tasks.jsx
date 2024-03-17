import React from 'react'
import { useState, useEffect } from "react";
import './Tasks.css'
import { ItemTask } from '../ItemTask/ItemTask'
import { EnterField } from '../EnterField/EnterField';
import { ResponseText } from '../ResponseText/ResponseText';
import { Filter } from '../Filter/Filter';



export const Tasks = () => {

    const [tasksI, setTasksI] = useState([
        {id: 1, name: "Bañarse viejo", description: "le hace falta paiiiii",done: false},
        {id: 2, name: "Comer viejo", description: "le hace algo de falta paiiiii",done: false},
        {id: 3, name: "Conseguir novia mi viejo", description: "le hace muchaaaa falta paiiiii",done: false}
    ])
    const [filterType, setFilterType] = useState('');


    const addTask = (newTask, newTaskDescription) => {
        const newId = tasksI.length + 1;
        const newTaskObject = { id: newId, name: newTask, description: newTaskDescription, done: false };
        setTasksI([...tasksI, newTaskObject]);
    };

    const handleCheckboxClick = (taskId) => {
        setTasksI(tasksI =>
            tasksI.map(task =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };


    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    const filteredTasks = filterType === '' ? tasksI :
    filterType === 'Pendientes' ? tasksI.filter(task => !task.done) :
    filterType === 'Resueltas' ? tasksI.filter(task => task.done) :
    tasksI;

    const tasksResolved = tasksI.filter(task => task.done).length;
    const tasksPending = tasksI.filter(task => !task.done).length;

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasksI(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksI));
    }, [tasksI]);

  return (

    <>
    <EnterField addTask={addTask}/>
    <ResponseText result={`Usted tiene ${tasksPending} tareas por hacer y ${tasksResolved} tareas resueltas`}/>
    <hr />
    <Filter handleFilterChange={handleFilterChange} />
    <div id='taskContainer'>
        <ul>
            {
                filteredTasks.map(task => 
                    (
                        <div className="items" key={task.id}>
                        <ItemTask taskName={task.name} description={task.description}/>
                        <input type="checkbox" name="check" id="check" checked={task.done} onChange={() => handleCheckboxClick(task.id)} />
                        </div>
                    )
                )
            }

        </ul>
    </div>

    </>

    )
}

