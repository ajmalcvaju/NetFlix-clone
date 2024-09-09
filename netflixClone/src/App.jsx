import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Navbar from './Components/Navbar'
import { AuthContextProvider } from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
