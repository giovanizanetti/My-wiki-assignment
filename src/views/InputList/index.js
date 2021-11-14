import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import InpuListHeader from './InpuListHeader'
import InputListFooter from './InputListFooter'
import Counter from './Counter'
import ArticleInput from '../../components/ArticleInput'
import InputItem from '../../components/InputItem'

const InputList = ({ addArticles }) => {
  const [listItems, setListItems] = useState([])

  const history = useHistory()

  const handleAddArticle = (article) => {
    //check for duplicated
    const isItem = listItems.find((item) => item.pageid === article.pageid)

    if (!isItem) {
      setListItems((prevState) => [...prevState, article])
    } else {
    }
  }

  const handleDeleteArticle = (id) => {
    const filteredItems = listItems.filter((item) => item.pageid !== id)
    setListItems(filteredItems)
  }
  const handleSubmit = () => {
    addArticles(listItems)
    setListItems([])
    history.push('/wikilist')
  }

  const handleUpdateArticle = (prevArticleId, newArticle) => {
    const indexToBeUpdated = listItems.findIndex((element) => element.pageid === prevArticleId)
    const listItemsCopy = [...listItems]
    listItemsCopy[indexToBeUpdated] = newArticle
    const updatedList = listItemsCopy
    setListItems(updatedList)
  }

  const count = listItems.length < 1 ? 'No items' : listItems.length === 1 ? `1 item` : `${listItems.length} items`

  return (
    <div className='d-flex flex-column align-items-center '>
      <table>
        <InpuListHeader />
        {listItems.map((item) => {
          return (
            <InputItem
              key={item.pageid}
              deleteItem={handleDeleteArticle}
              item={item}
              list={listItems}
              upadateArticle={handleUpdateArticle}
            />
          )
        })}
        <ArticleInput addArticle={handleAddArticle} list={listItems} />
        <Counter count={count} />
        <InputListFooter submit={handleSubmit} />
      </table>
    </div>
  )
}

export default InputList
