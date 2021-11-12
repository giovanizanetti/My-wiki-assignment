import React, { useState } from 'react'
import InpuListHeader from './InpuListHeader'
import AddArticle from '../../components/AddArticle'

const InputList = ({ addArticles }) => {
  const [listItems, setListItems] = useState([])

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
  }
  const count = listItems.length < 1 ? 'No items' : listItems.length === 1 ? `1 item` : `${listItems.length} items`

  return (
    <>
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
      <footer>
        <button onClick={handleSubmit}>Submit</button>
      </footer>
    </>
  )
}

export default InputList
