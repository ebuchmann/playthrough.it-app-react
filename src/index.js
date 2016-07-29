import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Collection from './containers/Collection';


window.debug = function debug(...args) {
    console.log.apply(console, args); // eslint-disable-line no-console
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="profile" component={Profile} />
            <Route path="collection" component={Collection} />
        </Route>
    </Router>,
    document.getElementById('app')
);
