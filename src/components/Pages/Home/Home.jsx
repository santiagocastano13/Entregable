import React from 'react'
import './Home.css'
import { EnterField } from '../../EnterField/EnterField'



export const Home = () => {
  return (
    <>
    <div id='home'>
        <EnterField title='Titulo de la Tarea: ' />
        <EnterField title='Descripcion de la Tarea: ' />
        <button>Crear</button>
    </div>
    </>
  )
}
