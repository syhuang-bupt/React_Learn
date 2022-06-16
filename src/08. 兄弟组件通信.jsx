import React from "react"

class Father extends React.Component {
  // 准备数据
  state = {
    message: '测试一些兄弟组件通信'
  }
  transferMessage = (bMsg) => {
    this.setState({
      message: bMsg
    })
    console.log(bMsg);
  }
  render() {
    return (
      <div>
        <SonA bmsg={this.state.message}></SonA>
        <SonB func={this.transferMessage}></SonB>
      </div>
    )
  }
}
// 目标：B组件中的数据传给A 
// 技术路线：先把B组件中的数据通过子传父传给父组件，再由父组件传给A 
// 函数组件的son
function SonA(props) {
  return(
    <div>
      {`我是函数组件的SonA ${props.bmsg}`}
    </div>
  )
}
function SonB(props) {
  const bMessage = '这是来自B组件中的数据'
  return(
    <div>
      我是函数组件的SonB
      <button onClick={() => props.func(bMessage)}>点击按钮将B组件中的数据传给父组件</button>
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
 