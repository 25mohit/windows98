import React, { useEffect, useState } from 'react'
import MainMenu from './Menu/MainMenu';

const TaskBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], {hour:'2-digit', minute: '2-digit', hour12: true}))

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    console.log("useEffect Runs");
    const getTime = setInterval(() => {
      console.log("Time Out Runs");
      setCurrentTime(new Date().toLocaleTimeString([], {hour:'2-digit', minute: '2-digit', hour12: true}))
    },30000)
    return () => {
      clearInterval(getTime)
    }
  },[currentTime])


  return (
    <div className='taskbar flex-center-between'>
      { showMenu && <MainMenu /> }
      <div className="start">
        <button className='flex-center' onClick={() => setShowMenu(!showMenu)}>Start</button>
      </div>
      <div className="time">
        <span>{currentTime}</span>
      </div>
    </div>
  )
}

export default TaskBar