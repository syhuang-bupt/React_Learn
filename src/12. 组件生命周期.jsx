import React from 'react'
// 组件生命周期
// 只有类组件才有生命周期
// 1. 生命周期挂载阶段：constructor -> render -> componentDidMount
  // 1.1 constructor 创建组件时，最先执行，初始化的时候只执行一次
  // 1.2 render 每次组件渲染都会触发，不能在里面调用setState函数
  // 1.3 componentDidMount，组件挂载（完成DOM渲染）后执行，初始化的时候执行一次。可以用来发送网络请求，进行DOM操作
// 2. 生命周期更新阶段：render -> componentDidUpdate
  // 2.1 render 每次组件渲染都会触发
  // 2.2 componentDidupdate 组件更新后，DOM渲染完毕，可以进行DOM操作
// 3. 生命周期卸载阶段：componentWillUnmount
  // 3.1 componentWillUnmount 可以用来清理定时器
class Test extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div>test</div>
    )
  }
}
class App extends React.Component {
  constructor() {
    super()
    console.log('constructor');
  }
  state = {
    count: 0,
    flag: true
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return (
      <div>
        this is a div
        <button onClick={this.handleClick}>{this.state.count}</button>
        {this.state.flag ? <Test></Test> : null}
      </div>
    )
  }
}

export default App
