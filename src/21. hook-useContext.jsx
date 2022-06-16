import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

function ComC() {
  const count = useContext(Context)
  return (
    <div>
      this is ComC 
      从App传过来的数据为：{count}
    </div>
  )
}

function ComB() {
  return (
    <div>
      this is ComB
      <ComC></ComC>
    </div>
  )
}

function App() { 
  const [count, setCount] = useState(0)
  return(
    <Context.Provider value={count }>
      <div>
        this is ComA
        <ComB></ComB>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
    </Context.Provider>
  )
}

export default App