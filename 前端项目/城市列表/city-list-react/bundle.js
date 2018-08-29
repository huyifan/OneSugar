import React from 'react'
import {render} from 'react-dom'
import App from "./src/app";

class AppContainer extends React.Component {
  render() {
    return <App/>
  }
}
render(
  <AppContainer/>, document.getElementById('root')
)