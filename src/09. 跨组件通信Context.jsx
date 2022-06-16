import React,{createContext} from "react"

// App -> A -> C
// App数据直接传给C
// 注意事项：上层组件和下层组件关系是相对的只要存在就可以使用 通常都会通过App作为数据提供方
// 这里涉及到的语法都是固定的，提供的位置value提供数据 获取的位置{value => 使用value做什么都可以}
// 1. 导入createContext方法并执行
const {Provider, Consumer} = createContext()
function ComA() {
  return (
    <div>
      这是组件A
      <ComC></ComC>
    </div>
  )
}
function ComC() {
  return (
    <div>
      这是组件C
      {/* 通过Consumer使用数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
    
  )
}
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      // 2. 通过Provider提供数据
      <Provider value={this.state.message}>
        <div>
          这是根组件
          <ComA></ComA>
        </div>
      </Provider>
    )
  }
}

export default App;
 