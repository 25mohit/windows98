import React from 'react'

const Icon = ({ label, icon }) => {
  return (
    <div className='icon'>
        <img className="icon-img" src={icon} />
        <span className='label'>{label}</span>
    </div>
  )
}

export default Icon