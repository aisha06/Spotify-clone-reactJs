// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
const SongsItem = ({name,image, desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' alt='' src={image}/>
      <p className='font-bold mt-2 mb-1'>
        {name}
      </p>
      <p className='text-slate-200 text-sm'>
        {desc}
      </p>
    </div>
  )
}

export default SongsItem
