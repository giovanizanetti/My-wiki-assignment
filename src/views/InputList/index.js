import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import InpuListHeader from './InpuListHeader'
import AddArticle from '../../components/AddArticle'

const InputList = ({ addArticles }) => {
  const [listItems, setListItems] = useState([])
  const history = useHistory()

  const handleAddItem = (item) => {
    setListItems((prevState) => [...prevState, item])
  }
  const handleDelete = (id) => {
    const filteredItems = listItems.filter((item) => item.pageid !== id)
    setListItems(filteredItems)
  }
  const handleSubmit = () => {
    addArticles(listItems)
    setListItems([])
    history.push('/wikilist')
  }
  const count = listItems.length < 1 ? 'No items' : listItems.length === 1 ? `1 item` : `${listItems.length} items`

  return (
    <div className='d-flex flex-column align-items-center '>
      <table>
        <InpuListHeader />
        <tbody>
          <AddArticle addItem={(item) => handleAddItem(item)} deleteItem={(id) => handleDelete(id)} />
          {listItems.map((item) => {
            return <AddArticle key={item.pageid} addItem={(item) => handleAddItem(item)} />
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3'>{count}</td>
          </tr>
        </tfoot>
      </table>
      <footer className='d-flex justify-content-center'>
        <button onClick={handleSubmit}>Submit</button>
      </footer>
    </div>
  )
}

export default InputList
