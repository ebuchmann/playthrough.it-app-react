import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

require('../styles/NavMenu.scss');

class NavMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };
    }

    render() {
        return (
            <span className="nav-menu" tabIndex="0" ref="menu">
                {this.props.name}
                <div className="menu">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/profile">Profile</Link>
                    <Link className="link" to="/collection">Collection</Link>
                </div>
            </span>
        );
    }

}

NavMenu.propTypes = {
    name: PropTypes.string.isRequired,
};

export default NavMenu;
