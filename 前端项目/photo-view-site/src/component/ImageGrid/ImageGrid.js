import React, {Component} from 'react';
import {List, Card, Avatar, Icon} from 'antd';
import './ImageGrid.css'

const data = [
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },
    {
        name: '胡一帆1',
        dep: '云闪付团队',
        goodAt: 'Java',
        like: '羽毛球、游泳'
    },

]
const {Meta} = Card;

export default class ImageGrid extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <List
            grid={{gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4}}
            dataSource={data}
            renderItem={item => (
                <List.Item>

                    <Card
                        hoverable
                        title={<span className='card_name'>{item.name}</span>}
                        className='grid_card_style'
                        cover={<img className='user_img' src={require('../../image/user.jpg')}/>}
                        actions={[<Icon type="eye-o"><span style={{marginLeft: '5px'}}>100</span></Icon>,
                            <Icon type="like-o"><span style={{marginLeft: '5px'}}>13</span></Icon>,
                            <Icon type="ellipsis"/>]}

                    >
                        <Meta
                            title={"擅长：" + item.goodAt}
                            description={"兴趣：" + item.like}
                        />
                    </Card>

                </List.Item>
            )}
        />
    }
}
