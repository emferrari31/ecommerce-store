import './styles.css';
const OurWinesHeroSection = () => {
    return (
        <section className="our-wines-hero">
            <div className="our-wines-hero-overlay">
                <h1>OUR OLIVE OIL</h1>
                <div className='purple-underline-container'>
                    <img src="public/gold-ul.svg" alt='gold underline' className="gold-underline"/>
                </div>
                <p>At Terra Tuscana, our mission is to bring the finest, most authentic Tuscan olive oils to the world,
                    while staying committed to sustainability, quality, and the traditions of our land. We take pride
                    in crafting small-batch, hand-harvested olive oils that capture the true essence of Tuscany.
                    Sourced from our family-owned farms and the rich soils of the region, each bottle reflects a
                    commitment to excellence. Our olive oils are cold-pressed to preserve their natural flavors,
                    and are designed to elevate every meal with a taste of Tuscany’s heritage. We hope you experience
                    the passion and craftsmanship in every drop. </p>

            </div>
        </section>
    );
};

export default OurWinesHeroSection