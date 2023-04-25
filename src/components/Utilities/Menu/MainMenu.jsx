import { AiFillCaretRight } from 'react-icons/ai'

const MainMenu = () => {
  return (
    <div className='main-menu'>
        <div className="left">
            <h2>Windows<span>98</span></h2>
        </div>
        <div className="menu">
            <ul className='ul'>
                <li className='li'>Windows Update</li>
                <li className='li'>Programs <AiFillCaretRight /> 
                    <li className="second-level">
                        <ul className='ul-2'>
                            <li className='li-2'>Accesories<AiFillCaretRight />
                                <li className='third-level'>
                                    <ul className='ul-3'>
                                        <li className='li-3'>Calculator</li>
                                        <li className='li-3'>Notepad</li>
                                    </ul>
                                </li>
                            </li>
                            <li className='li-2'>Entertainment</li>
                            <li className='li-2'>Games<AiFillCaretRight /></li>
                        </ul>
                    </li>
                </li>
                <li className='li'>Favourites<AiFillCaretRight />
                    <li className="second-level">
                        <ul className='ul-2'>
                            <li className='li-2'>Channel<AiFillCaretRight /></li>
                            <li className='li-2'>Links<AiFillCaretRight /></li>
                            <li className='li-2'>Software Updates<AiFillCaretRight /></li>
                        </ul>
                    </li>
                </li>
                <li className='li'>Documents</li>
                <li className='li'>Settings<AiFillCaretRight />
                    <li className="second-level">
                        <ul className='ul-2'>
                            <li className='li-2'>User</li>
                            <li className='li-2'>Control Pannel</li>
                        </ul>
                    </li>
                </li>
                <li className='li'>Find</li>
                <li className='li'>Help</li>
                <li className='li'>Run</li>
                <li className='li'>Log Off Midnite</li>
                <li className='li'>Shut Down</li>
            </ul>
        </div>
    </div>
  )
}

export default MainMenu