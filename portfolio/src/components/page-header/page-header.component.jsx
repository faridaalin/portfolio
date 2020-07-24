import React from 'react';

import './page-header.styles.css'

function PageHeader({title}) {
    return(
        <div className="page-header">
            <h1 className="page-title">{title}</h1>
        </div>
    )
}

export default PageHeader;