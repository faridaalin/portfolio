import React from 'react';
import { NavLink } from 'react-router-dom'

import './card.styles.css'

export const Content = ({ heading, description }) => {
    return (
        <div className="content-container">
            <h1 className="content-title">{heading}</h1>
            <p className="content-text">{description}</p>
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


