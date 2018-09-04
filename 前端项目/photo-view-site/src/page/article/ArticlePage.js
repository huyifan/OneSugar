import React, {Component} from 'react';
import {Menu, Icon, Layout, Breadcrumb, BackTop, Affix} from 'antd';
import './article.css';
import ImageGrid from '../../component/ImageGrid/ImageGrid'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider} = Layout;


export default class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      mode: 'inline',
    }
  }


  handleClick = (e) => {
    console.log('click ', e);
  }

  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }


  render() {
    return <Layout className='layout_style'>
      <Sider width={180}
             collapsible
             collapsed={this.state.collapsed}
             onCollapse={this.onCollapse}
             style={{fontFamily: 'youyuan', letterSpacing: '1px'}}
             className='sider_style'>
        <Menu
          mode={this.state.mode}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%'}}
        >
          <SubMenu key="sub1" title={<span><Icon type="user"/>前端开发</span>}>
            <Menu.Item key="1" title='移动互联网室'>HTML/CSS/JavaScript</Menu.Item>
            <Menu.Item key="2" title='清算室'>Vue/React/Angular</Menu.Item>
            <Menu.Item key="3" title='测试室'>自动化工具</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop"/>后台开发</span>}>
            <Menu.Item key="5" title='开发团队'>Java</Menu.Item>
            <Menu.Item key="6" title='测试团队'>Spring</Menu.Item>
            <Menu.Item key="7" title='安全团队'>SpringBoot</Menu.Item>
            <Menu.Item key="8" title='运营团队'>运营团队</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification"/>金融民生事业部</span>}>
            <Menu.Item title='客户团队' key="9">客户团队</Menu.Item>
            <Menu.Item title='酒店行业团队' key="10">酒店行业团队</Menu.Item>
            <Menu.Item title='旅游行业团队' key="11">旅游行业团队</Menu.Item>
            <Menu.Item title='电商行业团队' key="12">电商行业团队</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content style={{padding: '0 24px', minHeight: '2.8rem'}}>

        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <ImageGrid/>
      </Content>
    </Layout>


  }
}

