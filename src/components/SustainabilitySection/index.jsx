import './styles.css';

const SustainabilitySection = () => {
    return (
        <>
            <div className="sustain-section">
                <video className="circle-video" autoPlay loop muted>
                    <source src="rootedinsustainability.mp4" type="video/mp4" />
                </video>                <div className="sustain-text">
                    <h2>ROOTED IN SUSTAINABILITY</h2>
                    <div className='gold-underline-container-sust'>
                        <img src="gold-ul.svg" alt='gold underline' className="gold-underline"/>
                    </div>
                    <p> At Terra Tuscana, sustainability is at the heart of everything we do. We understand the
                        responsibility we have as a business to make a meaningful, positive impact on both the
                        environment and the communities we serve. Our commitment to sustainability goes beyond
                        the products we create—it’s woven into every step of our journey. We’re dedicated to
                        being transparent about our progress, learning from our challenges, and sharing our
                        experiences as we strive for continuous improvement. With humility, we acknowledge
                        there is always more to do, and we remain committed to making a difference, one step
                        at a time.</p>
                    <button className='commit-btn'>Our commitments</button>
                </div>
            </div>
        </>
    )

}
export default SustainabilitySection