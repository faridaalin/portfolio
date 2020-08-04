import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './card.styles.css'

export const Content = ({ heading, description }) => {
    useEffect(() => {
        AOS.init({ duration: 400, once: true })
    }, [])

    return (
        <div className="content-container" data-aos="fade-up">
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


export const CardImage = ({ image, name, }) => {
    useEffect(() => {
        AOS.init({ duration: 400, once: true })
    }, [])

    return (

        <img src={image} alt={name} className="card-container" data-aos="fade-up" />

    )
}


