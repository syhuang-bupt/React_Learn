import React from "react"

// 父子组件通信
// 父传子：props
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
class Father extends React.Component {
  // 准备数据
  state = {
    list: [1,2,3]
  }
  getSonMessage(sonMessage) {
    console.log(sonMessage);
  }
  render() {
    return (
      <div>
        <Son getSonMessage={this.getSonMessage}></Son>
      </div>
    )
  }
}

// 函数组件的son
function Son(props) {
  const {getSonMessage} = props
  function handleClick() {
    getSonMessage('这是来自于子组件中的数据')
  }
  return(
    <div>
      我是函数组件的Son
      <button onClick={() => getSonMessage('这是来自于子组件中的数据')}>click me</button>
      <button onClick={handleClick}>click me 2</button>
    </div>
  )
}
function App() {
  return (
    <div>
      <Father></Father>
    </div>
  );
}

export default App;
 