import React from 'react';
import Navbar from '../shared/Navbar';
import BusinessInfo from './BusinessInfo';
import './header.css';
import HeaderMain from './HeaderMain';




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