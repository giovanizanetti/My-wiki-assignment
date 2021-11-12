import { useEffect } from 'react'

export const useDocTitle = (textValue) => {
  useEffect(() => {
    if (textValue) {
      window.document.title = textValue
    }
  }, [textValue])
}
