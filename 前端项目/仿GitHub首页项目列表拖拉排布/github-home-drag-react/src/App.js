import React, {Component} from 'react';
import './App.css';
import DragItem from './component/DragItem/DragItem'
import DragContainer from './component/DragContainer/DragContainer'

let data = [
  {
    title: 'imooc1',
    desc: '这是项目描述1',
    type: 'javaScript',
    star: '1'
  },
  {
    title: 'imooc2',
    desc: '这是项目描述2',
    type: 'javaScript',
    star: '4'
  },
  {
    title: 'imooc3',
    desc: '这是项目描述3',
    type: 'javaScript',
    star: '3'
  },
  {
    title: 'imooc4',
    desc: '这是项目描述4',
    type: 'javaScript',
    star: '11'
  },
  {
    title: 'imooc5',
    desc: '这是项目描述5',
    type: 'javaScript',
    star: '14'
  },

]
class App extends Component {
  render() {

    return (
      <div className="App">
        <DragContainer
          data={data}
          style={{width: '750px'}}
        />
      </div>
    );
  }
}

export default App;
