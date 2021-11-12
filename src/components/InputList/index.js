import React, { useState } from 'react'

import InpuListHeader from './InpuListHeader'
import AddArticle from '../AddArticle'

const InputList = () => {
  return (
    <>
      <table>
        <InpuListHeader />
        <tbody>
          <AddArticle />
          {/* <tr>
            <td>
              <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type='text' list='LIST-ID' />
              <datalist autoComplete='true'></datalist>
            </td>
            <td>
              <input className='desc' type='text' disabled value='Astronomical spheroid of plasma' />
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr> */}
          <tr>
            <td>
              <input type='text' list='LIST-ID' value='Star Wars (film)' />
              <datalist autocomplete='off'></datalist>
            </td>
            <td>
              <input
                className='desc'
                type='text'
                disabled
                value='1977 American epic space-opera film directed by George Lucas'
              />
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' list='LIST-ID' value='Star Wars: The Rise of Skywalker' />
              <datalist aria-autocomplete></datalist>
            </td>
            <td>
              <input className='desc' type='text' disabled value='2019 American film directed by J. J. Abrams' />
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' list='LIST-ID' value='' />
              <datalist aria-autocomplete></datalist>
            </td>
            <td>
              <input className='desc' type='text' disabled value='' />
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan='3'>3 items</td>
          </tr>
        </tfoot>
      </table>
      <footer>
        <button>Submit</button>
      </footer>
    </>
  )
}

export default InputList
