import React, {useEffect} from 'react';
import { NavLink, withRouter } from "react-router-dom";
import './navigation.styles.css';



function AsideMenu({ setOpen, open, history, location }) {

    useEffect(() => {
        history.listen(() => {
            setOpen(false)
        })
    })

    return (
            <ul className={`nav-links ${open ? 'show' : ''}`}>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active-link" >Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>

            </ul>

    )
}

export default withRouter(AsideMenu);