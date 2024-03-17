import { useState } from 'react'
import './App.css'


import { Header } from './components/Layouts/Header/Header'
import { Main } from './components/Layouts/Main/Main'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
