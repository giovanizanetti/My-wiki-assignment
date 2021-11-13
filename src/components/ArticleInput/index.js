import React, { useEffect, useRef, useState } from 'react'
import Autocomplete from 'react-autocomplete'
import { getDescription } from '../../helpers'
import { useDebounce } from '../../hooks/useDebounce'
import { useFetch } from '../../hooks/useFetch'

const ArticleInput = ({ addArticle }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerms = useDebounce(() => searchTerm, 300)
  const [data, loading, error] = useFetch(debouncedSearchTerms)
  const [selected, setSelected] = useState(null)
  const inputRef = useRef()
  const [clearField, setClearField] = useState(false)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleDelete = (item) => {
    console.log(item)
  }
  const handleSelect = (label, item) => {
    if (getDescription(item) === 'INVALID') {
      return
    }

    addArticle(item)
    setSearchTerm('')
  }

  const arrData =
    (data?.query &&
      Object.keys(data.query.pages)
        .sort((articleA, articleB) => articleA - articleB)
        .map((key) => {
          return !data.query.pages[key].pageprops.disambiguation && data.query.pages[key]
        })) ||
    []
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
            items={arrData}
            onSelect={(label, item) => handleSelect(label, item)}
          />
        </td>
        <td>
          <input className='desc' type='text' disabled value={getDescription(selected)} readOnly />
        </td>
        <td>
          <button className='btn bg-light border-dark' onClick={() => setSearchTerm('')}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  )
}
export default ArticleInput
