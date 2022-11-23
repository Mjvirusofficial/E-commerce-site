import React from 'react'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Auth/Login'
import Logout from './Auth/Logout'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div>
     {!isAuthenticated ? (
        <div>
    <Navbar auth={<Login/>}/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
    ) : (
      <div>
      <Navbar auth={<Logout/>}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>)}
    </div>
  )
}

export default App