import { useWindowScroll } from './hook/useWindowScroll'
import { useLocalStorage } from './hook/useLocalStorage'


function App() {
  const [y] = useWindowScroll()
  const [message, setMessage] = useLocalStorage('hook-key', 'hsy')
  setTimeout(() => {
    setMessage('yt')
  }, 2000)
  return(
    <div style={{height: '12000px'}}>
      {y} {message}
    </div>
  )
}

export default App