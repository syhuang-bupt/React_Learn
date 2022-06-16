import React from "react"

// 1. 函数式组件的创建与渲染
// 组件的名称必须首字母大写，必须有返回值
function Hello() {
  const handleClick = () => {
    console.log('函数组件中的点击事件被触发了');
  }
  return <div onClick={handleClick}>this is a function component</div>
}

// 2. 类组件的创建与渲染
// 组件的名称必须首字母大写，类组件应该继承React.Component父类，类组件必须提供render方法
class HelloComponent extends React.Component {
  // 事件回调函数（标准写法）
  handleClick = () => {
    console.log('类组件中的点击事件被触发了');
  }
  render() {
    return <div onClick={this.handleClick}>this is a class component</div>;
  }
}

function App() {
  return (
    <div>
      <Hello></Hello>
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
 