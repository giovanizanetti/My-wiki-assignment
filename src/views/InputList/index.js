import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import InpuListHeader from './InpuListHeader'
import AddArticle from '../../components/AddArticle'
import InputListFooter from './InputListFooter'
import Counter from './Counter'
import ArticleInput from '../../components/ArticleInput'
import InputItem from '../../components/InputItem'

const InputList = ({ addArticles }) => {
  const [listItems, setListItems] = useState([])

  // eslint-disable-next-line

  const history = useHistory()

  /**
   * Sort data ascendantly
   *
   * Convert response object to an Array
   *
   * @returns array of articles objects
   */
  const arrData =
    // (data?.query &&
    //   Object.keys(data.query.pages)
    //     .sort((articleA, articleB) => articleA - articleB)
    //     .map((key) => {
    //       return !data.query.pages[key].pageprops.disambiguation && data.query.pages[key]
    //     })) ||
    []

  const handleSelect = (item) => {
    // setSelected(item)
    // setListItems((prevItems) => [...prevItems, item])
    // setSelected(null)
    // setSearchTerm('')
    console.log('selected', item)
  }

  const handleAddArticle = (article) => {
    setListItems((prevState) => [...prevState, article])
  }
  const handleDeleteArticle = (id) => {
    console.log(id, 'from parent')
    const filteredItems = listItems.filter((item) => item.pageid !== id)
    setListItems(filteredItems)
  }
  const handleSubmit = () => {
    addArticles(listItems)
    setListItems([])
    history.push('/wikilist')
  }
  const count = listItems.length < 1 ? 'No items' : listItems.length === 1 ? `1 item` : `${listItems.length} items`

  const handleUpdate = (updatedItem) => {
    const indexToUpdate = listItems.findIndex((item) => item.id === updatedItem.id)
    const items = [...listItems]
    items[indexToUpdate] = updatedItem

    setListItems(items)
  }

  return (
    <div className='d-flex flex-column align-items-center '>
      <table>
        <InpuListHeader />
        {listItems.map((item) => {
          return <InputItem key={item.pageid} deleteItem={handleDeleteArticle} item={item} />
        })}
        <ArticleInput addArticle={handleAddArticle} />
        <Counter count={count} />
        <InputListFooter submit={handleSubmit} />
      </table>
    </div>
  )
}

export default InputList
