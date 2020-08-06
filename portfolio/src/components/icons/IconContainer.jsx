import React from 'react'
import { LinkedIn, Email, Github } from './Icons'

function IconContainer() {
    return (
        <div className="icon-container">
            <div className="icon-container-inner">
            <LinkedIn />
            <Github link="https://github.com/faridaalin/"/>
            <Email />
            </div>
        </div>
    )
}

export default IconContainer
