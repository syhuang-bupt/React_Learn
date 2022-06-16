import React from "react"

// 父子组件通信
class Father extends React.Component {
  // 准备数据
  state = {
    message: '我是你爹',
    arr: [1,2,3],
    list: {
      name: 'hsy',
      age: 18,
    }
  }
  getMessage = () => {
    console.log('我来传函数啦');
  }
  render() {
    return (
      <div>
        {/*   子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <FunctionSon msg={this.state.message} > </FunctionSon>
        <ClassSon msg={this.state.message  }></ClassSon>
        <TestType 
          arr={this.state.arr}
          list={this.state.list}
          func={this.getMessage }
          child={<span>这个是我要传递的JSX模版</span>}
          >
        </TestType>
      </div>
    )
  }
}

// 函数组件的son
function FunctionSon(props) {
  // props是一个对象，里面存着通过父组件传入的所有值
  // 根据单项数据流的要求，props是只读对象，不能修改 
  return(
    <div>我是函数组件的Son, {props.msg} </div>
  )
}
// 类组件的son
class ClassSon extends React.Component {
  render() {
    return (
      <div>我是类组件的Son,  {this.props.msg}</div>
    )
  }
}
// 用来测试父传子可传数据类型的组件
function TestType(props) {
  // props可以传递任意数据：布尔值，数字，字符串，数组，对象，函数，JSX（传递JSX相当于Vue中的插槽）
  // props可以结构
  //  const {arr,list,func,child} = props
  return (
    <div>
      我是函数子组件, {props.arr.map(item => <p key={item}>{item}</p>)}
      <h1>{props.list.name} + {props.list.age}</h1>
      <button onClick={props.func}>触发父组件中的函数</button>
      {props.child}
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
 