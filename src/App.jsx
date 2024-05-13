import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/Edit' element={<Edit/>}/>
    </Routes>


     </>
  )
}

export default App
