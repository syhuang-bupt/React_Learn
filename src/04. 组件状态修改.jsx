import React from "react"

// 在React hook出来之前，函数式组件没有自己的状态
// 组件状态 类组件作为演示

// 如果数据是组件的状态需要去影响视图，定义在state中，但如果数据不和视图绑定，定义成一个普通的实例属性就可以了
class TestComponent extends React.Component {
  // 1. 定义组件状态
  state = {
    // 在这里可以定义各种属性，全都是当前组件的状态
    name: 'hsy',
    age: 18,
  }
  // 事件回调函数
  changeName = () => {
    // 3. 修改state中的状态name
    // 注意：不可以直接做赋值修改，必须通过一个方法 setState
    // 定义状态必须通过state 实例属性的方法 提供一个对象 名称是固定的就叫state
    this.setState({
      name: 'yt'
    })
  }
  render() {
    // 2. 使用状态
    return (
      <div>å
        this is a TestComponent
        当前name为: {this.state.name}
        <button onClick = {this.changeName}>edit name</button>
      </div>
    )
  }
}
// 定义和使用事件响应函数的时候必须有一个是箭头函数，不然没有反应，涉及this指向问题
// 事件绑定最推荐采用如下class fields写法 推荐！！！
class Count extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // render函数中的this指向组件实例对象
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.count} click</button>
    )
  }
}

class EditComponent extends React.Component {
  state = {
    count: 0,
    arr: [1,2,3],
    list: {
      name: 'hsy',
      age: 18
    }
  }
  // 状态修改不能直接修改，采用如下方式 
  // map和filter方法都不会修改原数组，React中可以用来删除数组中的元素
  handleClick = () => {
    this.setState({
      count: this.state.count + 100,
      arr: [...this.state.arr, 4, 5],
      list: {...this.state.list, name: 'yt'}
    })
    setTimeout(()=>{
      this.setState({
        arr: this.state.arr.filter(item=>item!==2)
      })
    },1000)
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <ul>
          {this.state.arr.map(item => <li key={item}>{item}</li>)}
        </ul>
        <div>{`${this.state.list.name} + ${this.state.list.age}`}</div>
        <button onClick={this.handleClick}>点我改变state</button>
      </div>
    )
  }
}
function App() {
  return (
    <div>
      <TestComponent></TestComponent>
      <Count></Count>
      <EditComponent></EditComponent>
    </div>
  );
}

export default App;
 