import { useEffect } from 'react'
// 类组件发送网络请求
// 生命周期钩子函数 componentDidMount
// 执行时期：在初始化的时候DOM渲染完毕时只执行一次

// useEffect
// 1. 不加依赖项 - 初始化 + 重新渲染
// 2. 加[] - 初始化执行一次
// 3. 加特定依赖项 - 初始化 + 任意一个依赖项变化执行
function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://geek.itheima.net/v1_0/channels')
      console.log(res);
    }
    fetchData()
  }, [])
  return(
    <div>

    </div>
  )
}

export default App