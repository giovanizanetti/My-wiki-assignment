import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../config/constants'

export const useFetch = (debouncedSearchTerms) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()

    function fetch() {
      const url = BASE_URL + debouncedSearchTerms
      axios
        .get(url)
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => {
          setError(err)
        })
        .finally(() => setLoading(false))
    }

    setLoading(true)

    if (debouncedSearchTerms.length > 0) {
      fetch()
    }
    return () => abortController.abort()
  }, [debouncedSearchTerms])

  return [data, loading, error, setData]
}
