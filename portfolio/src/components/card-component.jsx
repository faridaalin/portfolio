import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './card.styles.css'

export const Content = ({ heading, description, link_contact, link_projects }) => {
    useEffect(() => {
        AOS.init({ duration: 400, once: true })
    }, [])

    return (
        <div className="content-container" data-aos="fade-up">
            <h2 className="content-title">{heading}</h2>
            <div className="content-text">
            <p>{description.part_1}</p>
            <p>{description.part_2}</p>
            <p>{description.part_3}</p>
            </div>
            <div className="btn">
                <Button name="Contact" link_contact={link_contact} />
                <Button name="Projects" link_contact={link_projects} />
            </div>
        </div>
    )
}


export const Button = ({ name, link_contact }) => {
    return (
        <NavLink
            to={link_contact}
            activeClassName="active-link"
            target="blank">
            {name}
        </NavLink>
    )
}


export const CardImage = ({ image, image_unclipped, name, }) => {
    useEffect(() => {
        AOS.init({ duration: 400, once: true })
    }, [])

    return (

        <img src={image.image_unclipped} alt={name} className="card-container" data-aos="fade-up" />

    )
}


