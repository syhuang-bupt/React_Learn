import React from 'react'

// children属性：表示该节点的子节点，只要组件内部有子节点，props就有该属性
// children支持：普通文本，普通标签元素，函数，JSX

// 子组件
function ListItem({children}) {
  return (
    <div>
      ListItem, {children}
    </div>
  )
}

// 父组件
class App extends React.Component {
  render() {
    return (
      <div>
        <ListItem>
          <div>this is child</div>
        </ListItem>
      </div>
    )
  }
}

export default App
