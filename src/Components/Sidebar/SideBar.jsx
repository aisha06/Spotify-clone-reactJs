// eslint-disable-next-line no-unused-vars
import React from 'react'
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate =useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-4 text-white hidden lg:flex bg-[#121212]'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')}     className='flex items-center gap-3 pl-8 cursor-pointer mt-4'>
          <img className='w-6' src={assets.home_icon} alt='Home'/>
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer mt-4'>
          <img className='w-6' src={assets.search_icon} alt='Search'/>
          <p className='font-bold'>Search</p>
        </div>
      </div>
      
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt='Library'/>
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt='Arrow'/>
            <img className='w-5' src={assets.plus_icon} alt='Add'/>
          </div>
        </div>
        
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>Its easy, we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create playlist
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Lets find someprodcast to follow</h1>
          <p className='font-light'>we will keep you update on new episode</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse prodcast
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
