import { useEffect, useRef } from 'react'
import React from 'react'

// 组件实例 类组件
// DOM对象 标签
class TestC extends React.Component {
  getName = () => {
    console.log('this is a child test ');
  }
  render() {
    return (
      <div>我是类组件</div>
    )
  }
}

function App() { 
  const testRef = useRef(null)
  const h1Ref = useRef(null)
  useEffect(() => {
    console.log(testRef.current);
    console.log(h1Ref.current);
  }, [])
  // useEffect回调是在DOM渲染之后执行 
  return(
    <div>
      <TestC ref={testRef}></TestC>
      <h1 ref={h1Ref}>this is h1 </h1>
    </div>
  )
}

export default App