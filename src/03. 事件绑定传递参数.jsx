import React from "react"

// 1. 函数式组件的创建与渲染
// 可以在事件绑定函数中直接通过参数e拿到事件对象，可以利用e来阻止默认行为，例如阻止a标签的跳转
function Hello() {
  const handleClick = (e) => {
    console.log('函数组件中的点击事件被触发了', e);
    // 例如阻止a标签的跳转
    e.preventDefault();
  }
  return <div><a onClick={handleClick} href="http://baidu.com">百度</a></div>
}

//通过箭头函数的形式传递自定义参数
function Msg() {
  const handleClick = (msg) => {
    console.log('函数组件中的点击事件被触发了', msg);
  }
  return <div onClick={() => handleClick('this is a message')}>click me</div>
}

//同时传递事件对象e和自定义参数
function Both() {
  const handleClick = (e, msg) => {
    console.log('函数组件中的点击事件被触发了', e, msg);
  }
  return <div onClick={(e) => handleClick(e, 'this is a message')}>click me</div>
}

function App() {
  return (
    <div>
      <Hello></Hello>
      <Msg></Msg>
      <Both></Both>
    </div>
  );
}

export default App;
 