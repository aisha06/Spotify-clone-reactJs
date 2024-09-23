// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useRef } from 'react';
import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import Players from './Components/Players';
import Display from './Components/Display';
import { PlayerContext } from './Components/Context/PlayerContext';

function App() {
  const { audioRef, track, playStatus, seekBar, setTime } = useContext(PlayerContext);
  const prevPlayStatus = useRef(playStatus); // Track previous play status

  // Effect to handle play/pause when track or play status changes
  useEffect(() => {
    if (audioRef.current) {
      // Update the audio current time and seek bar progress
      const updateAudioTime = () => {
        seekBar.current.style.width = (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };

      // Set the new time update event listener
      audioRef.current.ontimeupdate = updateAudioTime;

      // Play or pause the audio based on the play status
      const playAudio = async () => {
        try {
          // Check if the playStatus has changed
          if (playStatus !== prevPlayStatus.current) {
            if (playStatus) {
              await audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
          }
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      };

      // Call playAudio function to handle play/pause
      playAudio();

      // Update previous play status
      prevPlayStatus.current = playStatus;
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, [playStatus, track, audioRef, seekBar, setTime]); // Include setTime and seekBar in dependency array

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar />
        <Display />
      </div>
      <Players />
      <audio src={track.file} ref={audioRef} preload='auto'></audio>
    </div>
  );
}

export default App;
