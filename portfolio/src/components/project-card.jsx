import React, { useEffect } from 'react';
import './project.styles.css'

import AOS from 'aos';
import 'aos/dist/aos.css';



function ProjectCards({ index, name, date, gitHub_src_code, image, description, tags, link }) {

    useEffect(()=> {
        AOS.init({duration: 1000, once: true})
    }, [])


    return (

        <div className={`project-card data-index-${index}`}>
            <div className="project-info">
                <div className="project-info-header" data-aos="fade-up">
                    <h1 className="project-title">{name}</h1>
                    <span className="tags">{tags}</span>
                    <span className="date">{date}</span>
                </div>
                <div className="project-img" data-aos="fade-up">
                    <a href={link} target="blank">
                    <img src={image} alt={name} />
                    </a>
                </div>
                <div className="project-description-container" data-aos="fade-up">
                    <p className="project-description">{description}</p>
                    
                    <div className="link-container">
                        <div className="link">
                            <a target={"blank"} href={link} className="project-site">Go to website</a>
                        </div>
                        <div className="link">
                            <a href={gitHub_src_code} target="blank" className="src-code">Source code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCards;