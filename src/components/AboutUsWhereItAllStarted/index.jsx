import './styles.css';
import {Link} from "react-router-dom";

const AboutUsWhereItAllStarted = () => {
    return (
        <>
            <div className="about-where-section">
                <img src="italianWoman.svg" alt="The Founders of Terra Tuscana." className="circle-image"/>
                <div className="about-where-text">
                    <h2>Hi, I'm Alessandra...</h2>
                    <div className='gold-underline-container-sust'>
                        <img src="gold-ul.svg" alt='gold underline' className="gold-underline"/>
                    </div>
                    <p> I’m Alessandra, founder of Terra Tuscana. Raised in London by my Italian parents, I always felt
                        a deep yearning for the warmth and flavors of Tuscany. A dream nurtured over years of family
                        meals and stories of my ancestors, it led me back to the sun-kissed hills of Tuscany, where I
                        could share the true essence of this magical land with the world.
                        At Terra Tuscana, we craft small-batch, artisanal olive oils that capture the heart and soul of
                        Tuscany. Every drop is a celebration of tradition, family, and the timeless beauty of the Tuscan
                        landscape. Our oils are not just products—they are the taste of a place I hold dear, a little
                        piece of Tuscany to bring home.</p>
                    <button className="cta-btn">
                        <Link to="/products" style={{textDecoration: 'none'}}>
                            Explore our full range
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )

}
export default AboutUsWhereItAllStarted