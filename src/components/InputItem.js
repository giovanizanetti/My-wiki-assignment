import { getDescription } from '../helpers'
import { useFetch } from '../hooks/useFetch'
import { useDebounce } from '../hooks/useDebounce'
import { useState } from 'react'
import { transformAndSort } from '../helpers'

import Autocomplete from 'react-autocomplete'

const InputItem = ({ item, deleteItem, upadateArticle, list }) => {
  const [searchTerm, setSearchTerm] = useState(item.title)
  const debouncedSearchTerms = useDebounce(() => searchTerm, 300)
  // eslint-disable-next-line
  const [data, loading, error, setData] = useFetch(debouncedSearchTerms)
  const [feedBack, setFeedback] = useState('')

  const handleChange = (e) => {
    setFeedback('')
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleSelect = (label, newArticle) => {
    // setData([])
    if (getDescription(newArticle) === 'INVALID') {
      setFeedback('INVALID')
      return
    }
    const isNewArticle = list.find((article) => article.pageid === newArticle.pageid)
    if (!isNewArticle) {
      upadateArticle(item.pageid, newArticle)
      setFeedback(false)
      setSearchTerm('')
    } else {
      setFeedback('THIS ARTICLE HAS BEEN ALREADY SELECTED!')
    }
  }

  return (
    <tbody>
      <tr>
        <td>
          <Autocomplete
            renderItem={(item, isHighlighted) => (
              <div className={`p-2 bg-${isHighlighted ? 'light' : 'white'}`} key={item.pageid}>
                {item.title}
              </div>
            )}
            onChange={(e) => handleChange(e)}
            value={searchTerm}
            getItemValue={(item) => item.title}
            items={transformAndSort(data)}
            onSelect={(label, item) => handleSelect(label, item)}
          />
        </td>
        <td>
          <input
            className={`desc ${feedBack ? 'text-danger font-weight-bold' : ''}`}
            type='text'
            disabled
            value={feedBack ? feedBack : getDescription(item)}
            readOnly
          />
        </td>
        <td>
          <button
            className='btn bg-light border-dark'
            onClick={() => {
              deleteItem(item?.pageid)
              setData([])
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
