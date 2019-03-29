import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';

import Index from "../index/index"
import State from "../index/state"
import Details from "../details/details"
import Login from "../login/login"
import NotFound from "../notFound/notFound"
// import Header from "../components/header/header";
// import Footer from "../components/footer/footer";
import '~antd/dist/antd.css';

class BasicRoute extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //挂载
    componentDidMount() {

    }
    //卸载
    componentWillUnmount() {

    }
    render() {
        const {
            Header, Footer, Sider, Content,
        } = Layout;
        let layoutRouter = (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>
                            <ul>
                                <li>
                                    <Link to="/">index</Link>
                                </li>
                                <li>
                                    <Link to="/details">details</Link>
                                </li>
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                                <li>
                                    <Link to="/renyi">renyi</Link>
                                </li>
                                <li>
                                    <Link to="/state">state</Link>
                                </li>
                            </ul>
                        </Sider>
                        <Content>
                            <div>变化区域↓</div>
                            <Switch>
                                <Route exact path="/" component={Index} />
                                <Route exact path="/details" component={Details} />
                                <Route exact path="/state" component={State} />
                                <Route component={NotFound}/>
                            </Switch>
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' render={props =>layoutRouter}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default BasicRoute;
