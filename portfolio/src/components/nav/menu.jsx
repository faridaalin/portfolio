import React, { useState } from 'react';
import './navigation.styles.css';

import AsideMenu from './asideMenu'
import Hamburger from './hamburger'

const Menu = () => {
    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(!open)
    }

    return (
        <nav>
            <Hamburger open={open} onClick={openHandler}/>
            <AsideMenu setOpen={setOpen} open={open} />
        </nav>
    )
}

export default Menu;
