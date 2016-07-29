import React, { PropTypes } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

require('./styles/app.scss');

const App = (props) => (
    <div>
        <SiteHeader />
        {props.children}
        <SiteFooter />
    </div>
);

App.propTypes = {
    children: PropTypes.element.isRequired,
};

export default App;
