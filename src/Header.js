import React from 'react';

// this function component is used to load the header in the page
function Header(props){
    const logoSrc = `${process.env.PUBLIC_URL}/assets/logo.png`;
    const homeHref = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : '/';

    return (
        <header className="wrapper">
            <a href={homeHref}>
                <img src={logoSrc} alt="scan it logo"/>
            </a>
            <i aria-hidden="true" className="fas fa-info-circle"  onClick={() => props.showInfo()}>
                <span className="srOnly">click to show help information</span>
            </i>
        </header>
    );
}
export default Header;
