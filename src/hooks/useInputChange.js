import { useState } from 'react'

export const useInputChange = (initialValue = '') => {
  const [searchTerm, setSearchTerm] = useState(initialValue)
  const [feedBack, setFeedback] = useState('')

  const handleChange = (e) => {
    setFeedback('')
    const value = e.target.value
    setSearchTerm(value)
  }

  return { feedBack, searchTerm, handleChange, setFeedback, setSearchTerm }
}
