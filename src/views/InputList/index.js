import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import InpuListHeader from './InpuListHeader'
import AddArticle from '../../components/AddArticle'
import InputListFooter from './InputListFooter'
import Counter from './Counter'

const InputList = ({ addArticles }) => {
  const [listItems, setListItems] = useState([])

  const history = useHistory()

  const handleAddItem = (item) => {
    setListItems((prevState) => [item, ...prevState])
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
          {listItems.map((item) => {
            return <AddArticle key={item.pageid} addItem={(item) => handleAddItem(item)} />
          })}
          <AddArticle
            isDefaultInput={true}
            addItem={(item) => handleAddItem(item)}
            deleteItem={(id) => handleDelete(id)}
          />
        </tbody>
        <Counter count={count} />
        <InputListFooter submit={handleSubmit} />
      </table>
    </div>
  )
}

export default InputList
