import React from 'react'
import IconContainer from '../icons/IconContainer'
import './footer.styles.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <IconContainer />
            <div className="footer-container">
                <p className="copywright">
                    &copy; {new Date().getFullYear()} Designed and built by Farida Alin
                </p>
            </div>
        </div>
    )
}

export default Footer
