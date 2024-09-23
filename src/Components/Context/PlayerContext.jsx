/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);

  // State for tracking the current song and play status
  const [track, setTrack] = useState(songsData[0]);
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

  // Refs for seek bar
  const seekBg = useRef();
  const seekBar = useRef();

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
  };
  // useEffect(()=>{
  //   // setTimeout(()=>{
  //   //   audioRef.current.ontimeupdate=()=>{
  //   //     setTime({
  //   //       currentTime: {
  //   //         second: Math.floor(audioRef.current.currentTime  % 60),
  //   //         minute:Math.floor(audioRef.current.currentTime / 60),
  //   //       },
  //   //       totalTime: {
  //   //         second: Math.floor(audioRef.current.duration % 60),
  //   //         minute:Math.floor(audioRef.current.duration / 60),
  //   //       },

  //   //     })
  //   //   }
        
  //   // },1000)

  // },[audioRef])

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      <audio ref={audioRef} src={track.url}></audio>
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;



