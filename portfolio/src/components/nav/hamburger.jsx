import React from 'react';
import './navigation.styles.css';


const Hamburger = ({ open, setOpen, onClick }) => {

    const openHandler = () => {
        setOpen(!open)
    }
    return (

        <div className={`mobile-menu ${open ? 'scale-down' : ''}`} onClick={openHandler}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

export default Hamburger;
