import React from 'react';
import logo from '../../img/logo.png';

function LogoContainer() {
    return (
        <div className="logo-container">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )

}

export default LogoContainer;
