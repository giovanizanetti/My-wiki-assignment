import React from 'react'
import { getDescription } from '../../helpers'

const Description = ({ feedBack, item = '' }) => {
  return (
    <td>
      <input
        className={`desc ${feedBack ? 'text-danger font-weight-bold' : ''}`}
        type='text'
        disabled
        value={feedBack ? feedBack : getDescription(item)}
        readOnly
      />
    </td>
  )
}

export default Description
