/**
 * Created by hugo on 2018/8/23.
 */
import React, {Component} from 'react';
import './dragItem.css'
class DragItem extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="container">
        <div className="container-div">
          <span className="container-div-header">

            <span className="container-div-header-span" title="Drag to reorder">
              <svg className="octicon" viewBox="0 0 8 16" version="1.1" width="8" height="16"
                   aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path>
              </svg>
            </span>

            <a href="/huyifan/IMOOC" className="text-bold" draggable="false">
              <span title="IMOOC" style={{marginLeft: '10px'}}>{item.title}</span>
            </a>

            <p>{item.desc}</p>

            <p >
              <span className="repo-language-color pinned-repo-meta" style={{backgroundColor: '#f1e05a'}}></span>
              <span style={{marginLeft: '5px'}}>{item.type}</span>
            <a href="/huyifan/IMOOC/stargazers" class="pinned-repo-meta muted-link" draggable="false">

              <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14"
                   height="16" role="img" style={{marginLeft: '10px'}}>

                <path fill-rule="evenodd"
                      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              {item.star}
            </a>
        </p>
          </span>
        </div>
      </li>
    );
  }
}

export default DragItem;