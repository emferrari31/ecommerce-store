import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to='/'><img src="/TerraTuscana.svg" alt="Logo of Site" className="logo-image" /></Link>
            </div>
            <ul>
                <li className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Shop</Link>
                    <Link to='/about-us'>Learn</Link>
                </li>
            </ul>
            <div className="icons">
                <i className='bx bx-search-alt-2'></i>
                <Link to='/cart'>
                <i className='bx bx-shopping-bag'></i>
                </Link>
            </div>

        </nav>
    )
}
export default NavBar