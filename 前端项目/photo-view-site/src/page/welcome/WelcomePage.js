/**
 * Created by hugo on 2018/9/3.
 */
import React, {PureComponent} from 'react';
import {
  Card,
} from 'antd';

export default class WelcomePage extends PureComponent {
  render() {

    return (<Card bordered={true}
                  style={{textAlign: 'center', height: 400, paddingTop: 30}}>
        <img
          src={require('../../image/ic_welcome.png')}
        />

        <div style={{fontSize: 20, marginTop: 10}}>
          欢迎访问前端公社
        </div>
      </Card>

    );
  }
}
