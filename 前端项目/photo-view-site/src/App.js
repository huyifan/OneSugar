import React, {Component} from 'react';
import {Menu, Icon, Layout, Breadcrumb, BackTop, Affix} from 'antd';
import './App.css';
import ImageGrid from './component/ImageGrid/ImageGrid'
import {navTitle} from './conf/baseInfo'
import WelcomePage from './page/welcome/WelcomePage'
import ArticlePage from './page/article/ArticlePage'
import ResourcePage from './page/resource/ResourcePage'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider} = Layout;


// 路由配置
const routes = [
  {path: "/", component: WelcomePage},
  {path: "/welcome", component: WelcomePage},
  {path: "/article", component: ArticlePage},
  {path: "/resource", component: ResourcePage},

];

export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Layout style={{height: '100%', background: '#fcfcfc'}}>
        <Affix>

          <Header className="header">
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{lineHeight: '64px', fontFamily: 'Chinese Quote', letterSpacing: '4px'}}
            >

              {navTitle.map((item, i) => {
                return <Menu.Item key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </Menu.Item>

              })}

            </Menu>
          </Header>
        </Affix>

        <Content style={{padding: '0 .3rem'}}>

          {
            routes.map((page, index) => page.component ?
              <Route key={index} exact path={page.path} component={page.component}/> : "")
          }

        </Content>

        <Footer style={{textAlign: 'center', background: 'rgba(240, 242, 245, 0)'}}>
          Ant Design ©2018 Created by Ant UED1
        </Footer>

        <BackTop/>

      </Layout>
    </BrowserRouter>


  }
}

