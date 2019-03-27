import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from "../index/index"
import Details from "../details/details"

const BasicRoute = () => (
    <BrowserRouter>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route exact path="/details" component={Details} />
		</Switch>
    </BrowserRouter>
);

export default BasicRoute;
