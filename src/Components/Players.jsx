// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';

import { assets } from '../assets/assets';
import { PlayerContext } from './Context/PlayerContext';

const Players = () => {
  // Destructure values from PlayerContext
  const { seekBar, seekBg, playStatus, play, pause, track, time } = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      {/* Song Information */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt={track.name} /> 
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      
      {/* Player Controls */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        {/* Control Buttons */}
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle'/>
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt='Previous'/>
          {/* Toggle play/pause based on playStatus */}
          {playStatus ? (
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt='Pause'/>
          ) : (
            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt='Play'/>
          )}
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt='Next'/>
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop'/>
        </div>

        {/* Progress Bar */}
        <div className='flex items-center gap-5 w-full'>
          {/* Display current time */}
          <p>{`${time.currentTime.minute}:${time.currentTime.second.toString()}`}</p>
          <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            {/* Seek bar shows the progress */}
            <div ref={seekBar} className='h-1 border-none w-[30%] bg-green-800 rounded-full'></div>
          </div>
          {/* Display total duration */}
          <p>{`${time.totalTime.minute}:${time.totalTime.second.toString()}`}</p>
        </div>
      </div>

      {/* Additional Controls */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4 cursor-pointer' src={assets.plays_icon} alt='Play'/>
        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt='Mic'/>
        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt='Queue'/>
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt='Speaker'/>
        <img className='w-4 cursor-pointer' src={assets.volume_icon} alt='Volume'/>
        <div className='w-20 bg-slate-50 h-1 rounded cursor-pointer'>
          <div className='h-1 bg-green-800 w-[50%] rounded'></div>
        </div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt='Mini Player'/>
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt='Zoom'/>
      </div>
    </div>
  );
}

export default Players;
