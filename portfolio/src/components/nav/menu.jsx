import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';

import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

const Menu = ({ location }) => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null)

    const [isFixed, setFixed] = useState(true)
    let current = 0;

    const handleScroll = () => {
        if (window.scrollY > current) {
            document.body.style.paddingTop = 0;
            setFixed(true)

            console.log('Window:', window.scrollY, 'current:', current)
            console.log('is set to true:', isFixed)
        } else {
            document.body.style.paddingTop = 0;
            document.body.style.paddingTop = headerRef.current.offsetHeight + 'px';
            setFixed(false)
            console.log('is set to false:', isFixed)
            console.log('Window:', window.scrollY, 'current:', current)

        }
        current = window.scrollY
        return isFixed;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (

        <header className={`header ${isFixed ? '' : 'fixed-nav'}`} ref={headerRef}>
            <LogoContainer />
            {location.pathname !== '/' && location.pathname !== '/home' && <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>}
        </header>

    )
}

export default withRouter(Menu);
