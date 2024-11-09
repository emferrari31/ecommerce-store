import './styles.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="nameEthos">
                    <h2>CANNED WINE CO.</h2>
                    <p> Canned Wine Co. aims to elevate thoughtful connection between people, planet and place,
                        through the appreciation of wine.</p>
                    <div className="footer-logos">
                        <img src="public/butterfly-mark.svg" alt='butterfy mark cerified' className="butterfly-logo"/>
                        <img src="public/drinkaware.svg" alt='drink aware logo' className="drink-aware-logo"/>
                    </div>
                </div>
                <div className='col1'>
                    <h4>FIND OUT MORE</h4>
                    <ul>
                        <li><a href="#">Trade Enquiries</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>
                <div className='col2'>
                    <h4>CONTACT</h4>
                    <p>Trimbridge House <br/>
                        Trim Street, <br/>
                        Bath <br/>
                        BA1 1HB</p>
                </div>
                <div className='col3'>
                    <h4>FOLLOW</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

        </>
    )

}
export default Footer