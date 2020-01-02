import React, { Component } from 'react';
import './email.less';
import { Layout, Menu } from 'element-react'
// import { Router, Route, Link } from 'react-router'

import EmailTable from './email-table/email-table'

class Email extends Component {

    onOpen() {

    }

    onClose() {

    }

    render() {
        // const {comments} = this.state
        return (
            <div className="email">
                <Layout.Row className="tac">
                    <Layout.Col span={8}>
                        <h5>Cloud Email</h5>
                        <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                            <Menu.SubMenu index="1" title={<span><i className="el-icon-star-on"></i>收藏夹</span>}>
                                <Menu.ItemGroup>
                                    <Menu.Item index="1-1">收件箱</Menu.Item>
                                    <Menu.Item index="1-2">已发送邮件</Menu.Item>
                                    <Menu.Item index="1-3">已删除邮件</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="2" title={<span><i className="el-icon-menu"></i>所有分类</span>}>
                                <Menu.ItemGroup>
                                    <Menu.Item index="2-1">收件箱</Menu.Item>
                                    <Menu.Item index="2-2">草稿箱</Menu.Item>
                                    <Menu.Item index="2-3">已发送邮件</Menu.Item>
                                    <Menu.Item index="2-4">发件箱</Menu.Item>
                                    <Menu.Item index="2-5">垃圾邮件</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.SubMenu>
                        </Menu>
                    </Layout.Col>
                </Layout.Row>
                <EmailTable/>
            </div>
        );
    }
}


export default Email;
