import React, {Component} from 'react';
import {Menu, Icon, Layout, Breadcrumb, BackTop, Affix} from 'antd';
import './App.css';
import ImageGrid from './component/ImageGrid/ImageGrid'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider} = Layout;


export default class App extends Component {


    handleClick = (e) => {
        console.log('click ', e);
    }


    render() {
        return <Layout style={{height: '100%', background: '#fcfcfc'}}>
            <Affix>

                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px', fontFamily: 'Chinese Quote', letterSpacing: '4px'}}
                    >
                        <Menu.Item key="1">科技人员</Menu.Item>
                        <Menu.Item key="2">兴趣爱好</Menu.Item>
                        <Menu.Item key="3">网站说明</Menu.Item>
                    </Menu>
                </Header>
            </Affix>
            <Content style={{padding: '0 .3rem'}}>

                <Layout className='layout_style'>
                    <Sider width={180}
                           style={{fontFamily: 'youyuan', letterSpacing: '1px'}}
                           className='sider_style'>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>科技事业部</span>}>
                                <Menu.Item key="1" title='移动互联网室'>移动互联网室</Menu.Item>
                                <Menu.Item key="2" title='清算室'>清算室</Menu.Item>
                                <Menu.Item key="3" title='测试室'>测试室</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>云闪付事业部</span>}>
                                <Menu.Item key="5" title='开发团队' >开发团队</Menu.Item>
                                <Menu.Item key="6" title='测试团队' >测试团队</Menu.Item>
                                <Menu.Item key="7" title='安全团队' >安全团队</Menu.Item>
                                <Menu.Item key="8" title='运营团队' >运营团队</Menu.Item>
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
            </Content>
            <Footer style={{textAlign: 'center', background: 'rgba(240, 242, 245, 0)'}}>
                Ant Design ©2018 Created by Ant UED1
            </Footer>

            <BackTop/>

        </Layout>


    }
}

