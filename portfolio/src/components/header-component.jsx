import React from 'react';
import Menu from './nav/menu'

// function Header(props) {
//     // use route props to show hide
//     return props.url === admin ? null : <div> ... </div>;
//    }

function Header() {
    return(
        <Menu />
    )
}

export default Header;

