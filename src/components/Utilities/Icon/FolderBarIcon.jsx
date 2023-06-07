import React from 'react'

const FolderBarIcon = ({ icon }) => {
  return (
    <div className='flex-center folder-bar-icon'>
        <span id='folder-bar-icon'>{icon?.icon}</span>
        <span className='label'>{icon?.label}</span>
    </div>
  )
}

export default FolderBarIcon