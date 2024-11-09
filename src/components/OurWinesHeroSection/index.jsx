import './styles.css';
const OurWinesHeroSection = () => {
    return (
        <section className="our-wines-hero">
            <div className="our-wines-hero-overlay">
                <h1>OUR WINES</h1>
                <div className='purple-underline-container'>
                    <img src="public/purple-ul.svg" alt='purple underline' className="purple-underline"/>
                </div>
                <p>At Canned Wine Co., it’s our mission to make the world’s most exciting wines accessible, sustainable
                    and convenient for all wine drinkers. <br/>
                    We are passionate about sharing unique and unusual wines of
                    the highest quality. Our award-wining wines are single varietal, vintage and are sourced from some
                    of Europe’s top producers. We hope you enjoy them as much as we do! <br/>

                    Explore all our wines below. </p>

            </div>
        </section>
    );
};

export default OurWinesHeroSection