import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import { MdMinimize } from 'react-icons/md'
import { TbLayoutNavbar } from 'react-icons/tb'
import myComputer from '../../Assets/icons/computer_explorer-4.png'
import FolderBarIcon from '../Utilities/Icon/FolderBarIcon'
import { BsScissors } from 'react-icons/bs'

const Folder = () => {

    const folderOptions = [
        { label: 'Cut', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
        { label: 'Copy', icon: <BsScissors />},
    ]

  return (
    <div className='folder_layout'>
        <div className="container">
            <nav className='flex-center-between'>
                <div className='flex-center'>
                    <img src={myComputer} alt="" />
                    <h5>My Computer</h5>
                </div>
                <div className='flex-center controls'>
                    <MdMinimize id='icon'/>
                    <TbLayoutNavbar id='icon'/>
                    <GrFormClose id='icon'/>
                </div>
            </nav>
            <head>
                <nav className='folder-nav flex-center-between'>
                    <div>
                        <div className="border-div" />
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Go</span>
                        <span>Favourites</span>
                        <span>Help</span>
                    </div>
                </nav>
                <div className="folder-options">
                    <div className="border-div" />
                    {
                        folderOptions?.map((icon, ind) => <FolderBarIcon key={ind} icon={icon}/>)
                    }
                    
                </div>
            </head>
        </div>
    </div>
  )
}

export default Folder