import './styles.css';

const WhatPeopleSay = () => {
    return (
        <>
            <div className="what-people-section">
                <div className="what-people-text">
                    <h2>WHAT OUR CUSTOMERS SAY</h2>
                    <div className='gold-underline-container-sust'>
                        <img src="public/gold-ul.svg" alt='gold underline' className="gold-underline"/>
                    </div>
                    <p className="quote1"> "I've been using Terra Tuscana for a few months now, and it has completely elevated my cooking.
                        The flavor is so fresh and vibrant, and I love knowing it’s sustainably produced. You can
                        really taste the difference when it's made with such passion and tradition. Highly
                        recommend!"</p>
                    <p>- James G, London</p>
                    <p className="quote2">"I’ve tried many olive oils in the past, but nothing compares to Terra Tuscana. It’s rich,
                        flavorful, and makes everything taste better. I love knowing it’s from small-scale, family-run
                        farms in Tuscany. Truly the best quality olive oil out there!"</p>
                    <p>- Lucy P, Wales</p>
                </div>
            </div>
        </>
    )

}
export default WhatPeopleSay