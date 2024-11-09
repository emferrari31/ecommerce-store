import './styles.css';
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1>EXCITING WINES <br/>
                    TOO GOOD TO BOTTLE</h1>
                <div className='teal-underline-container'>
                    <img src="public/teal-ul.svg" alt='teal underline' className="teal-underline"/>
                </div>
                <p>Canned Wine Co. wants to elevate thoughtful connection between people, planet and <br/>place,
                    through the appreciation of wine.</p>
                <img src="public/5stars.svg" alt="5 star rating image" className="five-star-rating"/>
                <button className="cta-btn">Shop all wines</button>
            </div>
        </section>
    );
};

export default HeroSection