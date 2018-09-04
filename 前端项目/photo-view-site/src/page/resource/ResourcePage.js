import React, {Component} from 'react';
import {Menu, Icon, Layout, Breadcrumb, BackTop, Affix} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider} = Layout;


export default class ResourcePage extends Component {


  handleClick = (e) => {
    console.log('click ', e);
  }


  render() {
    return <Layout style={{height: '100%', background: '#fcfcfc'}}>
      这是资源页面

      <BackTop/>

    </Layout>


  }
}

