import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';

import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

const Menu = ({ location }) => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null)

    const [isFixed, setFixed] = useState(false)
    let previousScroll = 0;


    const handleScroll = () => {
        if(window.scrollY > previousScroll) { //true
            // document.body.style.paddingTop = headerRef.current.offsetHeight + 'px';
            setFixed(window.scrollY > previousScroll)
        } else{
            setFixed(window.scrollY > previousScroll) //false
        }
        previousScroll = window.scrollY
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (

        <header className={`header ${isFixed ? 'hidden' : 'fixed-nav'}`} ref={headerRef}>
            <LogoContainer />
            {location.pathname !== '/' && location.pathname !== '/home' && <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>}
        </header>

    )
}

export default withRouter(Menu);
