import Autocomplete from 'react-autocomplete'

import { getDescription } from '../helpers'
import { useFetch } from '../hooks/useFetch'
import { useDebounce } from '../hooks/useDebounce'
import { transformAndSort } from '../helpers'
import { useInputChange } from '../hooks/useInputChange'

import Description from '../components/Description'

const ArticleInputItem = ({ item, deleteItem, upadateArticle, list }) => {
  const { feedBack, searchTerm, handleChange, setFeedback, setSearchTerm } = useInputChange(item.title)
  const debouncedSearchTerms = useDebounce(() => searchTerm, 300)
  const { data, error, setData } = useFetch(debouncedSearchTerms)

  const handleSelect = (label, newArticle) => {
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

  const handleDelete = () => {
    deleteItem(item?.pageid)
    setData([])
  }

  if (error) return <strong className='text-danger'>Ops! one error has ocurred!</strong>

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
        <Description feedBack={feedBack} item={item} />
        <td>
          <button className='btn bg-light border-dark' onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default ArticleInputItem
