import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Seatlayout from './pages/Seatlayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<Seatlayout/>}/>
      <Route path='/my-booking' element={<MyBooking/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
    </Routes>
      <h1>hi</h1>
{!isAdminRoute && <Footer/>}
    </>
  )
}

export default App