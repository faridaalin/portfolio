import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';
import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'
import throttle from 'lodash/throttle';


const THROTTLE_SPEED = 200;

const Menu = ({ location }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null)

    const [height, setHeight] = useState(0)
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    
    const hideShowHeader = {
        transform: shouldHideHeader ? `translateY(${-height}px)` : `translateY(0px)`,// Down
        boxShadow:  shouldShowShadow ? `rgb(160 160 160 / 70%) 0px 10px 30px -19px` :  'none', 
    } 

    let previousScroll = 0;

    const handleScroll = () => {
        const fromTop = window.scrollY; 

        if(fromTop < 56) {
            setShouldShowShadow(false)// Remove shadow 
        } else if((fromTop > previousScroll) && (fromTop > ref.current.offsetHeight))  {
            // Scrolling DOWN
            setShouldHideHeader(true) // Hide header
        } else {
            // scrolling UP
            setShouldShowShadow(true) // Show shadow and header
            setShouldHideHeader(false)
        }

        previousScroll = fromTop;
    
    }

    const throttledHandleScroll = throttle(handleScroll, THROTTLE_SPEED);

    useEffect(() => {
        setHeight(ref.current.clientHeight)
      }, [])
 

    useEffect(() => {
        window.addEventListener('scroll', throttledHandleScroll)
        return () => {
            window.removeEventListener('scroll', () => throttledHandleScroll)
        }
        // eslint-disable-next-line
    }, [])



    return (

        <header className="header" style={hideShowHeader} ref={ref}>
            <LogoContainer />
            {location.pathname !== '/' && location.pathname !== '/home' && <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>}
        </header>

    )
}

export default withRouter(Menu);
