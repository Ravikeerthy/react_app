import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Menu from './components/Menu'
import Pnf from './components/Pnf'
import Register from './components/Register'

import { ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
      <Router>
          <Menu/>
          <ToastContainer autoClose={5000} position={"top-right"}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/*' element={<Pnf/>}/>
          </Routes>
      </Router>
  )
}

export default App