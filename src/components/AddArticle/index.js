import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useFetch } from '../../hooks/useFetch'
import Autocomplete from 'react-autocomplete'

const AddArticle = ({ addItem, deleteItem }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerms = useDebounce(searchTerm, 300)
  const [data, loading, error] = useFetch(debouncedSearchTerms)
  const [itemDescription, setItemDescription] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {})

  //Transforming object keys in an array

  const displaySugestions = () => {
    if (data) {
      const dataListKeys = Object.keys(data.query.pages)
      return (
        dataListKeys.length > 0 && dataListKeys.map((key) => <option key={key} value={data.query.pages[key].title} />)
      )
    }
  }

  const handleChange = (e) => {
    setItemDescription('')
    const text = e.target.value.toLowerCase()
    setSearchTerm(text)
  }

  /**
   * Sort data ascendently
   *
   * Convert response object to an Array
   *
   * @returns array of articles
   */
  const arrData =
    (data?.query &&
      Object.keys(data.query.pages)
        .sort((articleA, articleB) => articleA - articleB)
        .map((key) => {
          return !data.query.pages[key].pageprops.disambiguation && data.query.pages[key]
        })) ||
    []

  const handleSelect = (label, item) => {
    const invalidDescription = 'INVALID'
    let description

    if (item?.pageprops['wikibase-shortdesc']) {
      description = item?.pageprops['wikibase-shortdesc']
    } else if (item?.pageprops['wikibase-shortdesc']) {
      description = item?.pageprops['wikibase-shortdesc']
    } else {
      description = invalidDescription
    }

    if (description === invalidDescription) {
      setItemDescription(description)
      return
    }

    setSelectedItem(item)
    setItemDescription(description)
    addItem(item)
    setSearchTerm(label)
  }

  if (error) return <strong>Ops! Somenthing went wrong</strong>

  return (
    <tr>
      <td>
        <Autocomplete
          renderItem={(item, isHighlighted) => (
            <div key={item.pageid} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
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
        <input className='desc' type='text' disabled value={itemDescription} readOnly />
      </td>
      <td>
        <button onClick={() => deleteItem(selectedItem.pageid)}>Delete</button>
      </td>
    </tr>
  )
}

export default AddArticle
