import React from 'react'
import './Main.css'
import { Home } from '../../Pages/Home/Home'
import { Tasks } from '../../Tasks/Tasks'




export const Main = () => {
  return (
    <>
    <main>
        <Home/>
        <Tasks/>
    </main>
    </>
  )
}
