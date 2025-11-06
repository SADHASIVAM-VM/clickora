import React from 'react'
import Homex from './pages/Home'
import {ContextProvider} from './config/contextApp'
const App = () => {
  return (
  <ContextProvider>
      <div className=' min-h-screen relative'>
       <img src='/blue.jpg' className="absolute -z-10 top-0 left-0 w-full h-full" alt="" />
        
      <Homex/>

    </div>
  </ContextProvider>
  )
}

export default App
