import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';
import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

import styled from 'styled-components';

const StyledContainer = styled.header`
background-color: #f2f2f2;
display: flex;
flex-direction: row;
padding: 32px 32px;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 2000;
transform: translateY(${props => props.scrollDirection === 'down' ? '-88px' : '0px'});
box-shadow: ${props => props.scrollDirection === 'up' ? `rgb(160 160 160 / 70%) 0px 10px 30px -19px` : 'none'};
`;

const Menu = ({ location }) => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null)

    const [scrollDirection, setscrollDirection] = useState('none')

    let previousScroll = 0;

    const handleScroll = () => {
        const fromTop = window.scrollY; 

        if(fromTop < 5) {
            setscrollDirection('none')
            console.log('none')
        } else if((fromTop > previousScroll) && (fromTop > headerRef.current.offsetHeight) && (scrollDirection !== 'down'))  {
            setscrollDirection('down')
            console.log('down')
        } else {
            setscrollDirection('up')
            console.log('up')
        }

        previousScroll = fromTop;

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])



    return (

        <StyledContainer scrollDirection={scrollDirection}  ref={headerRef}>
            <LogoContainer />
            {location.pathname !== '/' && location.pathname !== '/home' && <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>}
        </StyledContainer>

    )
}

export default withRouter(Menu);
