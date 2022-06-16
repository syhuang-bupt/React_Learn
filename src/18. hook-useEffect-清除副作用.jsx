import { useState, useEffect } from 'react'

// 在useEffect逻辑的最后添加return 箭头函数 该函数会在组件销毁的时候调用 
function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了');
    }, 1000)
    return () => {
       // 清理的动作
      clearInterval(timer)
    }
  }, [])
  return (
    <div>this is test </div>
  )
}

function App() {
  const [flag,setFlag] = useState(true)
  return(
    <div>
      {flag ? <Test></Test> : null} 
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}

export default App