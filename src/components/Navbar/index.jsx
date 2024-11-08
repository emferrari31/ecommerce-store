import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to='/'><img src="/logo.svg" alt="Logo of Site" className="logo-image" /></Link>
            </div>
            <ul>
                <li>
                    {/*<Link to='/'>Home</Link>*/}
                    <Link to='/products'>Shop</Link>
                    <Link to='/about-us'>Learn</Link>
                </li>
            </ul>
            <div className="icons">
                <i className='bx bx-search-alt-2'></i>
                <i className='bx bx-shopping-bag'></i>
            </div>

        </nav>
    )
}
export default NavBar