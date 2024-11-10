import './styles.css';

const AboutUsWhereItAllStarted = () => {
    return (
        <>
            <div className="about-where-section">
                <img src="/public/founders.svg" alt="The Founders of Canned Wine Co." className="circle-image"/>
                <div className="about-where-text">
                    <h2>WHERE IT ALL STARTED</h2>
                    <div className='gold-underline-container-sust'>
                        <img src="public/gold-ul.svg" alt='gold underline' className="gold-underline"/>
                    </div>
                    <p> When you only want a glass of wine, why should you compromise? Simon and Ben were inspired to
                        launch Canned Wine Co. in 2019 to deliver a better choice to customers for single serve wine.
                        Quality wines that deliver an experience, connect you to the people and place they come from,
                        and give you a better choice of what to drink. All of this could be delivered in a way
                        that didn’t cost the planet.</p>
                </div>
            </div>
        </>
    )

}
export default AboutUsWhereItAllStarted