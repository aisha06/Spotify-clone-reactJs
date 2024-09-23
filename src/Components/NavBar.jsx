// eslint-disable-next-line no-unused-vars
import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold '>
      <div className='flex items-center gap-2 '>
        <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded 2x1 cursor-pointer ' src={assets.arrow_left} alt=''/>
        <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded 2x1 cursor-pointer ' src={assets.arrow_right} alt=''/>


      </div>
      <div className='flex items-center  gap-4' >
        <p className=' bg-white text-black text-[15px] px-4 py-1 rounded 2x1 hidden md:block'>Explore Premium

        </p>
        <p className='bg-black py-1 px-3 rounded 2X1 text-[15px] cursor-pointer '> Install App</p>
       <p className='bg-purple-500 text-bleck w-7 h-7 rounded-full flex items-center justify-center '>A</p>

      </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        
        <p className='bg-white text-black px-4 py-1 rounded 2x1 '>All</p>
        <p className=' bg-black px-4py-1 rounded 2X1 '>Music</p>
        <p className=' bg-black px-4py-1 rounded 2X1 '>Prodcast</p>

        </div></>

  )
}

export default NavBar
