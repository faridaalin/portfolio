import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';
import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

// import styled from 'styled-components';

// const StyledContainer = styled.header`
// background-color: #f2f2f2;
// display: flex;
// flex-direction: row;
// padding: 32px 32px;
// justify-content: space-between;
// align-items: center;
// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// z-index: 2000;
// transform: translateY(${props => props.scrollDirection === 'down' ? '-88px' : '0px'});
// box-shadow: ${props => props.scrollDirection === 'up' ? `rgb(160 160 160 / 70%) 0px 10px 30px -19px` : 'none'};
// `;

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

    useEffect(() => {
        setHeight(ref.current.clientHeight)
      }, [])
 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
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
