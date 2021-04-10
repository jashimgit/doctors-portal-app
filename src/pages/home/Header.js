import React from 'react';

import BusinessInfo from './BusinessInfo';
import './header.css';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;