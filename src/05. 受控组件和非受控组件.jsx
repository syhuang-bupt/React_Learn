import React, {createRef } from "react"

// 表单-受控组件
class TestForm extends React.Component {
  // 1. 申明用来控制input value 的React组件自己的状态
  state = {
    message: 'this is message'
  }
  handleChange = (e) => {
    console.log('input change 事件触发', e);
    // 4. 拿到输入框最新的值 交给state中的message
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      // 2. 给input的value属性绑定React state
      // 3. 给input框绑定change事件
      <input type='text' value={this.state.message} onChange={this.handleChange}></input>
    )
  }
}

// 非受控组件
class InputComponent extends React.Component {
  // 这个实例属性是可以自定义的 
  msgRef = createRef()
  getValue = () => {
    // 通过msgRef获取input value的值  
    console.log(this.msgRef.current.value );
  }
  render() {
    return (
      <>
        <input type='text' ref={this.msgRef}></input>
        <button onClick={this.getValue}>点击获取输入框的值 </button>
      </>
    )
  }
}
function App() {
  return (
    <div>
      <TestForm></TestForm>
      <InputComponent></InputComponent>
    </div>
  );
}

export default App;
 