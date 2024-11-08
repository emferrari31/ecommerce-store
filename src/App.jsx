import './App.css';
import Products from './components/Products';
import NavBar from './components/NavBar';
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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

            <Routes>
                <Route path="/" element={<h1>Welcome to the Homepage!</h1>} />
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
