import React from 'react'

const InputListFooter = ({ submit }) => {
  return (
    <tfoot className='d-flex justify-content-center'>
      <tr>
        <td>
          <button className='btn bg-light border-dark' onClick={() => submit()}>
            Submit
          </button>
        </td>
      </tr>
    </tfoot>
  )
}

export default InputListFooter
