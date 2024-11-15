import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = ({ cartHasItems, alertMessage }) => {
    useEffect(() => {
        console.log("Alert Message in NavBar:", alertMessage); // Debug alertMessage
    }, [cartHasItems, alertMessage]);

    // console.log("Cart has items in NavBar:", cartHasItems); // Debugging line

    return (
        <nav>
            <div className="logo">
                <Link to='/'><img src="/TerraTuscana.svg" alt="Logo of Site" className="logo-image" /></Link>
            </div>
            {alertMessage && (
                <div className="alert">
                    {alertMessage}
                </div>
            )}
            <ul>
                <li className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Shop</Link>
                    <Link to='/about-us'>About</Link>
                </li>
            </ul>
            <div className="icons">
                <Link to='/cart'>
                    <span className={`cart-status ${cartHasItems ? 'full' : 'empty'}`}>
                    {cartHasItems ? <i className='bx bxs-shopping-bag'></i> : <i className='bx bx-shopping-bag'></i>}
                    </span>
                </Link>
            </div>

        </nav>
    )
}
export default NavBar