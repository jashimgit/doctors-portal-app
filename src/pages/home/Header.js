import React from 'react';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;