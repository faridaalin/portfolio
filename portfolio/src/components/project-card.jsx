import React from 'react';
import './project.styles.css'


function ProjectCards({ name, date, gitHub_src_code, image, description, tags, link }) {
    return (

        <div className="project-card">
            <div className="project-info">
                <div className="project-info-header">
                    <h1 className="project-title">{name}</h1>
                    <span className="tags">{tags}</span>
                    <span className="date">{date}</span>
                </div>
                <div className="project-img">
                    <img src={image} alt={name} />
                </div>
                <div className="project-description-container">
                    <p className="project-description">{description}</p>
                    <div className="link-container">
                        <div className="link">
                            <a target={"blank"} href={link} className="project-site">Go to website</a>
                            <i id="btn-arrow-right" className="material-icons">arrow_right_alt</i>
                        </div>

                        <div className="link">
                            <a href={gitHub_src_code} className="src-code">Source code</a>
                            <i id="btn-arrow-right" className="material-icons">arrow_right_alt</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCards;