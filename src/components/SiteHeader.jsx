import React from 'react';
import { Link } from 'react-router';
import NavMenu from './NavMenu';

require('../styles/SiteHeader.scss');

export default function SiteHeader() {
    return (
        <div className="top-nav-wrapper">
            <header className="site-header">
                <div className="container">
                    <Link to="/">
                        <img className="playthrough-logo" src="https://dl.dropboxusercontent.com/u/24984522/playthrough.it.svg" alt="Logo" />
                    </Link>
                    <div className="top-links">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/profile">Profile</Link>
                        <Link className="link" to="/collection">Collection</Link>
                        <NavMenu name="Eric" />
                    </div>
                </div>
            </header>
        </div>
    );
}
