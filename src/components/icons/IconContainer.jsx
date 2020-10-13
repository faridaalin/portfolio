import React from 'react'
import { LinkedIn, Github } from './Icons'

function IconContainer() {
    return (
        <div className="icon-container">
            <div className="icon-container-inner">
                <LinkedIn link="https://www.linkedin.com/in/farida-a-" />
                <Github link="https://github.com/faridaalin/" />
            </div>
        </div>
    )
}

export default IconContainer
