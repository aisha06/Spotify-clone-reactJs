// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from './NavBar'
import { albumsData,songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'

function DisplayHome() {
  return (
    <div>
      <NavBar/> 
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto gap-2'> {/* Corrected 'overflow auto' to 'overflow-auto' */}
          {albumsData.map((item, index) => (
            <AlbumItem 
              key={index} 
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today biggest hits</h1>
        <div className='flex overflow-auto gap-2'> {/* Corrected 'overflow auto' to 'overflow-auto' */}
          {songsData.map((item, index) => (
            <SongsItem 
              key={index} 
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome
