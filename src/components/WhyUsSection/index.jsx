import './styles.css';

const WhyUsSection = () => {
    const reasons = [
        {id: 1, name: 'PERFECTLY PORTIONED', description: 'Our cans hold the equivalent of one large glass, or two smaller glasses, allowing for a perfect serve every time.', image: "public/perfectlyPortioned.webp"},
        {id: 2, name: 'WINEMAKER PARTNERSHIPS', description: 'We work with some of Europe’s finest winemakers. They make fantastic wines, we protect that quality.', image: "public/winemakerPartnership.webp"},
        {id: 3, name: 'EXCITING GRAPE VARIETY', description: 'Discovery of some of the best and most unique wines that Europe has to offer, capturing a sense of place and time.', image: "public/excitingGrape.webp"},
        {id: 4, name: 'INFINITELY RECYCLABLE', description: 'As a funding partner of Every Can Counts we help promote wider, responsible aluminium recycling.', image: "public/recycle.webp"},
    ]

    return (
        <div className="why-us-section">
            <h1>WHY CANNED WINE CO.?</h1>
            <div className='purple-underline-container'>
                <img src="public/purple-ul.svg" alt='purple underline' className="purple-underline"/>
            </div>
            <p>We elevate thoughtful connection between people, planet and place, through the appreciation of wine.</p>
            <div className="reasons-list">
                {reasons.map(reason => (
                    <div key={reason.id}>
                        <img src={reason.image} alt={reason.name} className="product-image"/>
                        <h3>{reason.name}</h3>
                        <p>{reason.description}</p>
                    </div>
                ))}

            </div>
            <div className='button-container'>
                <button className="view-full-btn">View full collection</button>
            </div>
        </div>
    )
}


export default WhyUsSection