import React from 'react'
import  "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './componenets/Home'
import Room from './componenets/Room'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App