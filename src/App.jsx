import './App.css';
import Products from './components/ProductsPage';
import CartPage from "./components/CartPage/index.jsx";
import ProductDetail from "./components/ProductDetail";
import NavBar from './components/NavBar';
import AboutUs from "./components/AboutUsPage";
import HeroSection from "./components/HeroSection";
import ShopSection from "./components/ShopSection";
import BrandAssoc from "./components/BrandAssoc";
import Footer from "./components/Footer";
import WhyUsSection from "./components/WhyUsSection";
import SustainabilitySection from "./components/SustainabilitySection";
import WhatPeopleSay from "./components/WhatPeopleSay";
import ScrollToTop from "./components/ScrollToTop";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {useState} from "react";
import IconBarFreeDelivery from "./components/IconBarFreeDelivery/index.jsx";

function App() {
    const [cart, setCart] = useState([]);
    const [alertMessage, setAlertMessage] = useState("");

    const addToBasket = (product) => {
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1} // Increment quantity
                        : item
                )
            );
        } else {
            setCart([...cart, {...product, quantity: 1}]); // Add new item with quantity 1
        }

        const alertText = `${product.name} has been added to your basket!`;
        setAlertMessage(alertText);
        setTimeout(() => {
            setAlertMessage("");
        }, 3000);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    // Update item quantity
    const updateQuantity = (id, newQuantity) => {
        setCart(
            cart.map((item) =>
                item.id === id ? {...item, quantity: newQuantity} : item
            )
        );
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <AppWithRouting
                addToBasket={addToBasket}
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                total={total}
                alertMessage={alertMessage}

            />
        </BrowserRouter>
    );
}

function AppWithRouting({addToBasket, cart, removeFromCart, updateQuantity, total, alertMessage}) {
    const location = useLocation();
    console.log("alertMessage in AppWithRouting:", alertMessage); // Check if the alert message is passed correctly

    return (
        <div>
            <NavBar cartHasItems={cart.length > 0} alertMessage={alertMessage}/>
            {/* Render homepage components only on the "/" route */}
            {location.pathname === "/" && (
                <>
                    <HeroSection/>
                    <BrandAssoc/>
                    <ShopSection maxProducts={3} addToBasket={addToBasket}/> {/* Pass addToBasket to ShopSection */}
                    <WhatPeopleSay/>
                    <WhyUsSection/>
                    <SustainabilitySection/>
                </>
            )}

            <Routes>
                <Route path="/products" element={<Products addToBasket={addToBasket}/>}/>
                <Route path="/products/:productName" element={<ProductDetail addToBasket={addToBasket}/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            cart={cart}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                            total={total}
                        />
                    }
                />
            </Routes>
            <IconBarFreeDelivery />
            <Footer/>
        </div>
    );
}

export default App;