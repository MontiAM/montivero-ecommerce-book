import React from 'react'
import './ModalContainer.css'

function ModalContainer({content}) {
  return (
    <div className='modal'>
        <div className="center">
            {content}
        </div>
    </div>
  )
}

export default ModalContainer