import React from 'react'
import { LinkedIn, Email, Github } from './Icons'

function IconContainer() {
    return (
        <div className="icon-container">
            <div className="icon-container-inner">
            <LinkedIn link="https://www.linkedin.com/in/farida-a-"/>
            <Github link="https://github.com/faridaalin/"/>
            <Email link="mailto: faridaalin8@gmail.com"/>
            </div>
        </div>
    )
}

export default IconContainer
