import './styles.css';
import {Link} from "react-router-dom";
import React from "react";

const WhyUsSection = () => {
    const reasons = [
        {id: 1, name: 'SMALL-BATCH, HANDCRAFTED', description: 'Our olive oils are crafted in small batches, ensuring attention to detail and the highest quality in every bottle.', image: "smallBatch.svg"},
        {id: 2, name: 'FAMILY FARMING TRADITIONS', description: 'We partner with local, family-owned farms in Tuscany, where generations of experience and passion produce the finest olives.', image: "familyFarm.svg"},
        {id: 4, name: 'SUSTAINABILITY COMMITMENT', description: 'We’re dedicated to protecting the land and its future by employing sustainable farming practices, ensuring quality and preserving the environment for generations to come.', image: "sustainability.svg"},
    ]
    return (
        <div className="why-us-section">
            <h1>WHY TERRA TUSCANA?</h1>
            <div className='gold-underline-container'>
                <img src="gold-ul.svg" alt='gold underline' className="gold-underline"/>
            </div>
            <p>At Terra Tuscana, we bring you the very essence of Tuscany through our small-batch olive oils—crafted
                with care, passion, and a deep respect for the land.</p>
            <div className="reasons-list">
                {reasons.map(reason => (
                    <div key={reason.id}>
                        <img src={reason.image} alt={reason.name} className="product-image"/>
                        <h3>{reason.name}</h3>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="cta-btn">
                    <Link to="/products" style={{textDecoration: 'none'}}>
                        Explore Our Full Range
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default WhyUsSection;
