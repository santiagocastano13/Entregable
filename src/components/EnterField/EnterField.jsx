import React from 'react'
import { useState } from "react";
import './EnterField.css'

export const EnterField = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleInput = (event) => {
      setNewTask(event.target.value);
  };

  const handleInputDesc = (event) => {
      setNewTaskDescription(event.target.value);
  };

  const handleClick = () => {
      addTask(newTask, newTaskDescription);
      setNewTask('');
      setNewTaskDescription('');
  };
  return (
    <>
    
    <div id='field'>
        <h3>Titulo de la tarea: </h3>
        <input onChange={handleInput}/>
        <h3>Descripcion de la tarea: </h3>
        <input onChange={handleInputDesc}/>
        <button onClick={handleClick}>Crear</button>
    </div>

    </>
  )
}
