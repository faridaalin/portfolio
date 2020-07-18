import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from "react-router-dom"

import './navigation.styles.css';



function Navigation({history}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        
history.listen(()=> {
    setOpen(false)
})
    })

    const openHandler = () => {
        setOpen(!open)

    }

    return (
        <nav>
            <div className={`mobile-menu ${open ? 'scale-down' : ''}`} onClick={openHandler}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={` nav-links ${open ? 'show-menu' : ''}`} >
                <li>
                    <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default withRouter(Navigation);