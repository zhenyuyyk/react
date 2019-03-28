import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Index from "../index/index"
import Details from "../details/details"
import Login from "../login/login"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


const BasicRoute = () => (
    <BrowserRouter>
            <div>
                <Header />
                <div>
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
                    </ul>
                    <div>
                        <div>变化区域↓</div>
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/details" component={Details} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
    </BrowserRouter>
);

export default BasicRoute;
