import React from 'react';

require('../styles/SiteFooter.scss');

export default function SiteHeader() {
    return (
        <div className="site-footer">
            <img className="icon" src="https://dl.dropboxusercontent.com/u/24984522/footer.png" alt="Controller" />
            <p className="copyright">&copy;2016 PlayThrough.it</p>
        </div>
    );
}
