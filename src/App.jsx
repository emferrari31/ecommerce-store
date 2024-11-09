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
import SustainabilitySection from "./components/SustainabilitySection/index.jsx";
import IconBarFreeDelivery from "./components/IconBarFreeDelivery/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <AppWithRouting />
        </BrowserRouter>
    );
}

function AppWithRouting() {
    const location = useLocation();

    return (
        <div>
            <NavBar />

            {/* Render homepage components only on the "/" route */}
            {location.pathname === "/" && (
                <>
                    <HeroSection />
                    <BrandAssoc />
                    <ShopSection maxProducts={4} /> {/* Show only 4 products on the homepage */}
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
