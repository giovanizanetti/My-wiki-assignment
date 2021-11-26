import React, { useEffect, useRef } from 'react'
import Autocomplete from 'react-autocomplete'

import { getDescription } from '../../helpers'
import { useDebounce } from '../../hooks/useDebounce'
import { useFetch } from '../../hooks/useFetch'
import { transformAndSort } from '../../helpers'
import { useInputChange } from '../../hooks/useInputChange'

import Description from '../Description'

const AddArticle = ({ addArticle, list }) => {
  const { feedBack, searchTerm, handleChange, setFeedback, setSearchTerm } = useInputChange()
  const debouncedSearchTerms = useDebounce(() => searchTerm, 300)
  const { data, error, setData } = useFetch(debouncedSearchTerms)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    console.log(data)
  })

  useEffect(() => {
    if (data?.hasOwnProperty('batchcomplete') && !data?.query) {
      setTimeout(() => setFeedback('NOT FOUND! TRY ANOTHER SEARCH TERM'), 500)
    }
  }, [data, setFeedback])

  const handleSelect = (label, item) => {
    setData([])
    if (getDescription(item) === 'INVALID') {
      setFeedback('INVALID')
      return
    }
    const isItem = list.find((article) => article.pageid === item.pageid)
    if (!isItem) {
      addArticle(item)
      setFeedback(false)
      setSearchTerm('')
    } else {
      setFeedback('THIS ARTICLE HAS BEEN ALREADY SELECTED!')
    }
  }

  const resetField = () => {
    setSearchTerm('')
    setData([])
    inputRef.current.focus()
  }

  if (error) return <strong className='text-danger'>Ops! one error has ocurred!</strong>
  return (
    <tbody>
      <tr>
        <td>
          <Autocomplete
            ref={inputRef}
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
        <Description feedBack={feedBack} />
        <td>
          <button className='btn bg-light border-dark min-w-5r' onClick={resetField}>
            Clear
          </button>
        </td>
      </tr>
    </tbody>
  )
}
export default AddArticle
