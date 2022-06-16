import React from 'react';
import { Input, Table, Popconfirm } from 'antd';
import './App.css'
// import axios from 'axios'

const { Search } = Input;

class App extends React.Component {
  state =  {
    list: [
      {
        key: 1,
        id: 1,
        name: '吃饭',
        des: '干饭人干饭魂',
      },
      {
        key: 2,
        id: 2,
        name: '睡觉',
        des: '写代码不如睡觉',
      },
      {
        key: 3,
        id: 3,
        name: '打豆豆',
        des: '写代码不如打豆豆',
      },
    ],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      }, 
      {
        title: '操作',
        render: (_, record) => (
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(_, record)}>
            <a href='javescript:;'>Delete</a>
          </Popconfirm>
        )
      },
    ]
  }
  onSearch = (value) => {
    console.log(value);
    this.setState({
      list: this.state.list.filter(item=>item.name===value)
    })
  }

  handleDelete = (_, record) => {
    console.log('delete');
    console.log(_, record);
    this.setState({
      list: this.state.list.filter(item => item.key!==record.key)
    })
  }

  loadListDate = async () => {
    // const res = await axios.get('http://localhost:3001/data')
    // console.log(res);
    console.log('本地接口，我没法获取');
  }

  componentDidMount() {
    this.loadListDate()
  }

  render() {
    return (
      <div className='container'>
        {/* 搜索框 */}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
          className='search-box'
        />
        {/* 表格 */}
        <Table dataSource={this.state.list} columns={this.state.columns} />
      </div>
    )
  }
}
export default App