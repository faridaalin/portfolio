import React from 'react'

import './footer.styles.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-container">
                <p className="copywright">
                    &copy; {new Date().getFullYear()} Design by Farida Alin 
                </p>
            </div>
        </div>
    )
}

export default Footer
