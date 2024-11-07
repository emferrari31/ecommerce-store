import './App.css';
import Products from './components/Products';
import NavBar from './components/NavBar';
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavBar />  {/* This is here because we want it rendered on every page. */}
            <Routes>
                <Route path="/" element={<h1>Welcome to the Homepage!</h1>} />
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
