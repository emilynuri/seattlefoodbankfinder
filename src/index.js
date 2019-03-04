import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Community from './containers/Community';
import Find from './containers/Find';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={process.env.PUBLIC_URL+'/'} component={App}>
            <IndexRoute component={Home} />
            <Route path={process.env.PUBLIC_URL+'/about'} component={About} />
            <Route path="contact" component={Contact} />
            <Route path="community" component={Community} />
            <Route path="find" component={Find} />
        </Route>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
