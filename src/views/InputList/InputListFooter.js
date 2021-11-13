import React from 'react'

const InputListFooter = ({ submit }) => {
  return (
    <footer className='d-flex justify-content-center'>
      <button className='btn bg-light border-dark' onClick={() => submit()}>
        Submit
      </button>
    </footer>
  )
}

export default InputListFooter
