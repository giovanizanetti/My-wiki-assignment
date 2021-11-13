import React from 'react'

const Counter = ({ count }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan='3'>{count}</td>
      </tr>
    </tfoot>
  )
}

export default Counter
