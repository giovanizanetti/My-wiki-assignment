import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../config/constants'

export const useFetch = (debouncedSearchTerms) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = BASE_URL + debouncedSearchTerms

    setLoading(true)

    if (debouncedSearchTerms.length > 0) {
      axios
        .get(url)
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => {
          console.error(err)
          setError(err)
        })
        .finally(() => setLoading(false))
    }
  }, [debouncedSearchTerms])

  return [data, loading, error]
}
