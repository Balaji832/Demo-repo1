import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useStateHandler } from './context'
const Modal = () => {
 const { modal,modelHandler }= useStateHandler();
  return (
    <div className={`${modal?'modal-overlay show-modal':'modal-overlay'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={modelHandler}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
