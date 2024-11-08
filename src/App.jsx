import './App.css';
import Products from './components/ProductsPage';
import NavBar from './components/NavBar';
import AboutUs from "./components/AboutUsPage";
import HeroSection from "./components/HeroSection";
import ShopSection from "./components/ShopSection";
import BrandAssoc from "./components/BrandAssoc/index.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AddToWeeklyShop from "./components/AddToWeeklyShop/index.jsx";
import WhyUsSection from "./components/WhyUsSection/index.jsx";

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

            {location.pathname === "/" && <HeroSection />}  {/* Hero section only on the homepage */}
            {location.pathname === "/" && <BrandAssoc />}  {/* Hero section only on the homepage */}
            {location.pathname === "/" && <ShopSection />}  {/* Hero section only on the homepage */}
            {location.pathname === "/" && <AddToWeeklyShop/>}  {/* Hero section only on the homepage */}
            {location.pathname === "/" && <WhyUsSection/>}  {/* Hero section only on the homepage */}




            <Routes>
                <Route path="/" element={<h3>Welcome to the Homepage!</h3>} />
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
