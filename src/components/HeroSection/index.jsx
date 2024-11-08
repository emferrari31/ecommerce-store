import './styles.css';
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1>Exciting Wines, too good to bottle</h1>
                <p>The journey starts here</p>
                <button className="cta-btn">Shop all wines</button>
            </div>
        </section>
    );
};

export default HeroSection