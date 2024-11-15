import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const CartPage = ({cart, removeFromCart, updateQuantity, total}) => {
    // Handle removing item from cart
    const handleRemove = (id) => {
        removeFromCart(id);
    };
    // Handle updating item quantity
    const handleQuantityChange = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. <br/>
                    <Link to="/products">
                        <button className="go-back-to-shop-btn">Go back to shop</button>
                    </Link></p>
            ) : (
                <div>
                    <table className="cart-table">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{`£${item.price.toFixed(2)}`}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, parseInt(e.target.value))
                                        }
                                    />
                                </td>
                                <td>{`£${(item.price * item.quantity).toFixed(2)}`}</td>
                                <td>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="cart-summary">
                        <h3>Total: £{total.toFixed(2)}</h3>
                        <button className="checkout-btn">
                            <Link to="/checkout">Proceed to Checkout</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
