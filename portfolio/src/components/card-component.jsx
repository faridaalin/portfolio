import React from 'react';
import { NavLink } from 'react-router-dom'

import './card.styles.css'


export const Button = () => {
    return (
        <NavLink
            to="/contact"
            activeClassName="active-link">
            Contact
        </NavLink>
    )
}

export const Content = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Hi</h1>
            <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum </p>
            <div className="btn">
                <Button />
                <i id="btn-arrow-right" className="material-icons">
                    arrow_right_alt
            </i>
            </div>

        </div>
    )
}


export const Card = ({ image, name }) => {
    return (
        <div className="card-container">
            <img src={image} alt={name} />
        </div>
    )
}
