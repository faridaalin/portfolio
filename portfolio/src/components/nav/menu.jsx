import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';

import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

const Menu = ({ location }) => {
    const [open, setOpen] = useState(false);

        const [isFixed, setFixed] = useState(false)
        const headerRef = useRef(null)

        const handleScroll = () => {
            if(window.scrollY > headerRef.current.offsetTop) {
                document.body.style.paddingTop = headerRef.current.offsetHeight + 'px';
                setFixed(true)
            } else {
                document.body.style.paddingTop = 0;
                setFixed(false)
            }
            
        }

        useEffect(() => {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', () => handleScroll)
            }
        }, [])

        




    return (
        <header className={`header ${isFixed ? 'fixed-nav' : ''}`} ref={headerRef}>
            <LogoContainer />
            {location.pathname !== '/' && location.pathname !== '/home' && <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>}
        </header>

    )
}

export default withRouter(Menu);
