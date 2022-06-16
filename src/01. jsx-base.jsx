import './App.css'
const songs = [
  { id: 1, name: 'Never' },
  { id: 2, name: 'Ever' },
  { id:3, name: 'Together' }
]
const flag = true
const getTag = (type) => {
  switch(type) {
    case 1:
      return <h1>this is type 1</h1>;
    case 2:
      return <h1>this is type 2</h1>;
    case 3:
      return <h1>this is type 3</h1>;
    default:
      break;
  }  
}
function App() {
  return (
    <div className="App">
      <ul>
        { songs.map(song => <li className={ true ? 'active' : ''} key = {song.id}>{ song.name } </li>) }
      </ul>
      { flag ? <span style = {{color: 'red', fontSize: '30px'}}>条件渲染</span> : null }
      { getTag(2) }
    </div>
  );
}

export default App;
 