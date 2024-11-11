import './styles.css';
import {Link} from "react-router-dom";
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1>EXQUISITE OLIVE OIL <br/>
                HARVESTED FROM TUSCANY</h1>
                <div className='gold-underline-container'>
                    <img src="public/gold-ul.svg" alt='gold underline' className="gold-underline"/>
                </div>
                <p>At Terra Tuscana, we’re dedicated to bringing the authentic taste of Tuscany to your table.
                    Our olive oil is crafted with care, from handpicked olives grown in the rolling hills of
                    Italy’s most beloved region.</p>
                <img src="public/5stars.svg" alt="5 star rating image" className="five-star-rating"/>


                <button className="cta-btn">
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        Shop all
                    </Link>
                </button>

            </div>
        </section>
    );
};

export default HeroSection