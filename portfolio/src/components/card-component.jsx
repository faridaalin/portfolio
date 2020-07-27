import React from 'react';
import { NavLink } from 'react-router-dom'

import './card.styles.css'

export const Content = ({ heading, description }) => {
    return (
        <div className="content-container">
            <h2 className="content-title">{heading}</h2>
            <p className="content-text">{description}</p>
            <Button name="Contact" />
        </div>
    )
}


export const Button = ({ name, link }) => {
    return (
        <div className="btn">
            <NavLink
                to="/{link}"
                activeClassName="active-link">
                {name}
            </NavLink>
            <i id="btn-arrow-right" className="material-icons">
                arrow_right_alt
             </i>

        </div>
    )
}


export const CardImage = ({ image, name }) => {
    return (
        <div className="card-container">
            <img src={image} alt={name} />
        </div>
    )
}


