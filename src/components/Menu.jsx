import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <p><Link to="/" style={{color: "plum"}} >Home</Link></p>
            <p><Link to="/product" style={{color: "plum"}}>Product</Link></p>
        </div>
    );
};

export default Menu;