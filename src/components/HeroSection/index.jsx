import './styles.css';
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1>Welcome to this website</h1>
                <p>The journey starts here</p>
                <button className="cta-btn">Shop</button>
            </div>
        </section>
    );
};

export default HeroSection