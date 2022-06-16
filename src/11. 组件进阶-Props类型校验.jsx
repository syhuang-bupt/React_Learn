import React from 'react'
// 里面有内置的各种各样的校验规则
import PropTypes from 'prop-types'
// 也可以在函数参数里直接设置默认值（推荐）
function Test({list=[1,2,3]}) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}
// 注意大小写
Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array
  // list: PropTypes.array.isRequired // isRequired表示必须传 
}

// defaultProps可以设置默认值
// Test.defaultProps = {
//   list: [1,2,3]
// }

class ClassCom extends React.Component {
  // 对于类组件 使用类静态属性声明 
  static defaultProps = {
    list: [1,2,3]
  }
  render() {
    return (
      <div>
        {this.props.list.map(item => <p key={item}>{item}</p>)}
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Test list={[1,2,3]}></Test>
        <ClassCom></ClassCom>
      </div>
    )
  }
}

export default App
