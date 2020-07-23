import React from 'react';
import './project.styles.css'
import './card.styles.css'

function ProjectCards({ image, index, description, tags, link }) {
    return (
        <div className="bg-img" style={{ backgroundImage: `url(${image})` }} key={index}>
            <div className="cube">
            <p className="p-description">{description}</p>
            <span className="p-tags">{tags}</span>
            <div className="p-link-container">
                <a target={"blank"} href={link} className="p-link">Go to website </a>
                <i id="btn-arrow-right" className="material-icons">arrow_right_alt</i>
            </div>
            </div>
        </div>
    )
}

export default ProjectCards;