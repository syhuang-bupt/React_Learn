import { useState } from 'react'

// useState的初始值可以是一个函数的结果，类似计算属性
function Counter({num}) {
  const [count, setCount] = useState(() => num)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

function App() {
  return(
    <div>
      <Counter num={10}></Counter>
      <Counter num={20}></Counter>
    </div>
  )
}

export default App