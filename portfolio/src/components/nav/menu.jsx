import React, { useState } from 'react';
import './navigation.styles.css';

import LogoContainer from './Logo-container'
import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <LogoContainer />
            <nav>
                <Hamburger open={open} setOpen={setOpen} />
                <AsideMenu setOpen={setOpen} open={open} />
            </nav>
        </header>

    )
}

export default Menu;
