import React from 'react';
import {Helmet} from "react-helmet";

export default function HelmetContainer() {
    return (
        <Helmet>
          <meta charset="utf-8" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600&display=swap" rel="stylesheet" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="icon" href="./images/icon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="HTML, CSS, JavaScript, React.js, scss, Bootstrap, CMS" />
          <meta name="author" content="Farida Alin" />
          <meta name="theme-color" content="#000000" />

          <title>Farida Alin | Frontend Developer</title>
          <meta name="description" content="Frontend developer based in Oslo, Norway. Love creating and building design-focused websites." />    
          <meta itemprop="name" content="Farida Alin | Frontend Developer" />
          <meta itemprop="description" content="Frontend developer based in Oslo, Norway. Love creating and building design-focused websites." />
          <meta itemprop="image" content="https://www.faridaalin.com/images/logo.png" />
          <meta property="og:url" content="https://www.faridaalin.com" />
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Farida Alin | Frontend Developer" />
          <meta property="og:description" content="Frontend developer based in Oslo, Norway. Love creating and building design-focused websites." />
          <meta property="og:image" content="https://www.faridaalin.com/images/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Farida Alin | Frontend Developer" />
          <meta name="twitter:description" content="Frontend developer based in Oslo, Norway. Love creating and building design-focused websites." />
          <meta name="twitter:image" content="https://www.faridaalin.com/images/logo.png" />
        </Helmet>
    )
}
