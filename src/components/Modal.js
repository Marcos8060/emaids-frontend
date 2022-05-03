import React from 'react'

function Modal({modalContent}) {
  return (
    <>
      <div className="app__comment">
          <p className='modal'>{modalContent}</p>
      </div>
    </>
  )
}

export default Modal