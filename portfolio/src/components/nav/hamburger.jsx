import React from 'react';
import './navigation.styles.css';


const Hamburger = ({open}) => {
    return (

            <div className={`mobile-menu ${open ? 'scale-down' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
    )
}

export default Hamburger;
