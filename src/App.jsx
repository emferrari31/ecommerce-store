import './App.css';
import Products from './components/ProductsPage';
import NavBar from './components/NavBar';
import AboutUs from "./components/AboutUsPage";
import HeroSection from "./components/HeroSection";
import ShopSection from "./components/ShopSection";
import BrandAssoc from "./components/BrandAssoc/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AddToWeeklyShop from "./components/AddToWeeklyShop/index.jsx";
import WhyUsSection from "./components/WhyUsSection/index.jsx";
import {Suspense} from "react";
import SustainabilitySection from "./components/SustainabilitySection/index.jsx";
import IconBarFreeDelivery from "./components/IconBarFreeDelivery/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <AppWithRouting /> {/* AppWithRouting is a child component that contains the useLocation hook */}
        </BrowserRouter>
    );
}

function AppWithRouting() {
    const location = useLocation();  // Now useLocation() is inside BrowserRouter context

    return (
        <div>
            <NavBar />  {/* This is here because we want it rendered on every page. */}

            {/* Render homepage components only on the "/" route */}
            {location.pathname === "/" && (
                <>
                    <HeroSection />
                    <BrandAssoc />
                    <ShopSection />
                    <AddToWeeklyShop />
                    <WhyUsSection />
                    <SustainabilitySection />
                    <IconBarFreeDelivery />
                    <Footer />
                </>
            )}

            {/* Define the routes for other pages */}
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </div>
    );
}


export default App;
