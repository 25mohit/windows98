import { AiFillCaretRight } from 'react-icons/ai'

const MainMenu = () => {
  return (
    <div className='main-menu'>
        <div className="left">
            <h2>Windows<span>98</span></h2>
        </div>
        <div className="menu">
            <ul>
                <li>Windows Update</li>
                <li>Programs <AiFillCaretRight /> </li>
                <li>Favourites<AiFillCaretRight /></li>
                <li>Documents<AiFillCaretRight /></li>
                <li>Settings<AiFillCaretRight /></li>
                <li>Find<AiFillCaretRight /></li>
                <li>Help</li>
                <li>Run</li>
                <li>Log Off Midnite</li>
                <li>Shut Down</li>
            </ul>
        </div>
    </div>
  )
}

export default MainMenu