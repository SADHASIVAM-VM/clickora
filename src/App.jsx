import React, { useEffect } from 'react'
import Homex from './pages/Home'
import {ContextProvider} from './config/contextApp'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FeatureSection from './components/features'
import Navbar from './components/navbar'
import AuthPage from './pages/Login'
import ProtectedRoute from './protectedRoute'
import { ToastContainer } from 'react-toastify'
import AboutSection from './pages/About'
import ContactSection from './pages/Contact'
import Footer from './components/Footer'
const App = () => {
  let us = window.location.pathname;
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")  && us == "/login"){
    return <Navigate to={'/'}/>
  }

  },[us])
  return (
  <ContextProvider>
    <ToastContainer>
      
    </ToastContainer>
      <div className=''>
   
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homex/>
} />
          <Route path='/login' element={
            <AuthPage/>
         
} />
          <Route path='/generate' element={
            <ProtectedRoute>
              <FeatureSection/>
            </ProtectedRoute>
} />
          <Route path='/about' element={<AboutSection/>}/>
          <Route path='/contact' element={<ContactSection/>}/>
          </Routes></BrowserRouter>
      <Footer/>
      
    </div>

  </ContextProvider>
  )
}

export default App
