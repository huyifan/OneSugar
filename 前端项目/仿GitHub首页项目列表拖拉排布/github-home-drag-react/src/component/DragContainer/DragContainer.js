/**
 * Created by hugo on 2018/8/23.
 */
import React, {Component} from 'react';
import DragItem from '../DragItem/DragItem'
class DragContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      colNum: props.colNum || 2
    }
  }


  render() {
    let {data, colNum} = this.state

    let rowTmpData = []
    let rowData
    return (
      <div style={this.props.style}>
        {data.map((v, i) => {
          rowTmpData.push(
            <DragItem
              key={i}
              item={v}
            />)

          if ((i + 1) % colNum === 0) {
            rowData = <div key={i} style={{display: 'flex', padding: '5px'}}>
              {rowTmpData}
            </div>
            rowTmpData = []
            return rowData
          }

          if (i === data.length - 1)
            return <div key={i} style={{display: 'flex',padding:'5px'}}>
              {rowTmpData}
            </div>

        })}
      </div>
    );
  }
}

export default DragContainer;