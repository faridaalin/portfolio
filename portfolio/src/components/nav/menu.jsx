import React, { useState } from 'react';
import { withRouter } from "react-router";
import './navigation.styles.css';

import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

const Menu = ({location}) => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <LogoContainer />
            {location.pathname !== '/' && location.pathname !== '/home' && <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>}
        </header>

    )
}

export default  withRouter(Menu);
