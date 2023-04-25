import { GrFormClose } from 'react-icons/gr'
import './Layout.css'

const Modal = ({ heading }) => {
  return (
    <div className='modal flex-center'>
        <div className="container">
            <nav className='flex-center-between'>
                <span>{heading}</span>
                <GrFormClose id='close-icon' className='button'/>
            </nav>
        </div>
    </div>
  )
}

export default Modal