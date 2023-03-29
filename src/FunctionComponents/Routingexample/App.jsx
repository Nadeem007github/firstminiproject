import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Home from './Home'
import Navbar from './Navbar'
import Profile from './Profile'
export default function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/About' element={<About />}/>
               <Route path='/Contact' element={<Contact />}/>
               <Route path='/Profile/:name/:dsg/:salary' element={<Profile />}/>
               <Route path='/*' element={<Error />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
