import React from 'react';
// importing logo
import logo from '../../images/logo.png';
// connecting css
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>

        </div>
    );
};

export default Header;