// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.split('/').pop() : ""; // Extract last part of path
  const album = albumsData[Number(albumId)]; // Safely get the album data
  const bgColor = album ? album.bgColor : "#121212"; // Default to black if album not found

  useEffect(() => {
    if (isAlbum && album) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [isAlbum, album, bgColor]); // Add dependencies to avoid re-renders

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
