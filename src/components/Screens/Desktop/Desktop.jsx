import React, { useState } from 'react'
import Icon from '../../Utilities/Icon/Icon'
import computer from '../../../Assets/icons/computer_explorer-4.png'
import recycle from '../../../Assets/icons/recycle_bin_empty-4.png'
import folder from '../../../Assets/icons/directory_closed-4.png'
import internet from '../../../Assets/icons/world-2.png'
import Modal from '../../Layout/Modal'

const Desktop = () => {
  const [errorModal, setErrorModal] = useState(false)

  return (
    <div className='desktop flex-center'>
      { errorModal && <Modal onClose={setErrorModal} heading='about windows'/> }
      <div className="container">
        <Icon icon={recycle} label='recycle bin'/>
        <Icon icon={computer} label='my computer'/>
        <Icon icon={folder} label='documents'/>
        <Icon icon={internet} label='internet'/>
      </div>
    </div>
  )
}

export default Desktop