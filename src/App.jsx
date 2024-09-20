// eslint-disable-next-line no-unused-vars
import React from 'react'

import './App.css'
import SideBar from './Components/Sidebar/SideBar'
import Players from './Components/Players'
import Display from './Components/Display'

function App() {


  return (
    
    <div className='h-screen  bg-black  '>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Display/>
      </div>
      <Players/>
    </div>
   
  
  )
}

export default App
