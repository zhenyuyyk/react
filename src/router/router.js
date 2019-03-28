import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Index from "../index/index"
import Details from "../details/details"
import Login from "../login/login"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
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
						变化区域↓
                        <Route exact path="/" component={Index} />
                        <Route exact path="/details" component={Details} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </div>
                <Footer />
            </div>
        </Switch>
    </BrowserRouter>
);

export default BasicRoute;
