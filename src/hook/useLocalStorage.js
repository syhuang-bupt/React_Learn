import { useState, useEffect } from 'react'

export function useLocalStorage(key, defaultValue ) {
  const [message, setMessage] = useState(defaultValue)
  // 每次只要message变化，就自动同步到本地
  useEffect(() => {
    window.localStorage.setItem(key, message) 
  }, [key,  message])
  return [message, setMessage]
}