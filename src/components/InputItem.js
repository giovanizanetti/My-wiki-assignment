import { getDescription } from '../helpers'

const InputItem = ({ item, deleteItem }) => {
  return (
    <tbody>
      <tr>
        <td>
          <input type='text' disabled value={item?.title} readOnly />
        </td>
        <td>
          <input className='desc' type='text' disabled value={getDescription(item)} readOnly />
        </td>
        <td>
          <button
            className='btn bg-light border-dark'
            onClick={() => {
              deleteItem(item?.pageid)
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default InputItem
