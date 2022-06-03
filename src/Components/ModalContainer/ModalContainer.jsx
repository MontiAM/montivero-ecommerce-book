import React from 'react'
import './ModalContainer.css'

function ModalContainer({text, content}) {
  return (
    <div className='modal'>
        <div className="center">
            {text}
            {content}
        </div>
    </div>
  )
}

export default ModalContainer