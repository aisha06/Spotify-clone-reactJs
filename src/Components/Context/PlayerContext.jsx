/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);

  // State for tracking the current song and play status
  const [track, setTrack] = useState(songsData[2]);
  const [playStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Play function
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Corrected the function name to 'play'
      setPlayerStatus(true);
    }
  };

  // Pause function
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Corrected the function name to 'pause'
      setPlayerStatus(false);
    }
  };
  const playwithId = async (id)=>{
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayerStatus(true);

  }
  const prev=async()=>{
    if(track.id>0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayerStatus(true);
      
      

    }
  }
  const next=async()=>{
    if(track.id < songsData.length-1){
      await setTrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlayerStatus(true);
      
      

    }
  }


  // Refs for seek bar
  const seekBg = useRef();
  const seekBar = useRef();

const seekSong=async(e)=>{
  audioRef.current.currentTime=((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);

}



  // Context value to be provided to the components
  const contextValue = {
   
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playwithId,
    prev,next, seekSong,
  };
  
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      <audio ref={audioRef} src={track.url}></audio>
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;



