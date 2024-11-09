import './styles.css';

const SustainabilitySection = () => {
    return (
        <>
            <div className="sustain-section">
                <img src="/public/sustain.svg" alt="vinyard" className="circle-image"/>
                <div className="sustain-text">
                    <h2>COMMITED TO SUSTAINABILITY</h2>
                    <div className='purple-underline-container-sust'>
                        <img src="public/purple-ul.svg" alt='purple underline' className="purple-underline"/>
                    </div>
                    <p> At Canned Wine Co., we are committed to integrating sustainability into every fibre of our
                        business.
                        We recognise the responsibility businesses have to create a positive impact and the need to
                        communicate our progress transparently. We want to be humble about our imperfections and
                        continuously learn and share our insights along our sustainability journey.</p>
                    <button className='commit-btn'>Our commitments</button>
                </div>
            </div>
        </>
    )

}
export default SustainabilitySection