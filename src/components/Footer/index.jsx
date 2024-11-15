import './styles.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="nameEthos">
                    <h2>Terra Tuscana</h2>
                    <p>We’re dedicated to bringing the authentic taste of Tuscany to your table.</p>
                </div>
                <div className='col1'>
                    <h4>FIND OUT MORE</h4>
                    <ul>
                        <li><a href="#">Trade Enquiries</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>
                <div className='col2'>
                    <h4>CONTACT</h4>
                    <p>Terra Tuscana<br/>
                        Via delle Olive 42,<br/>
                        53023 San Gimignano (SI),<br/>
                        Tuscany, <br/>
                        Italy</p>
                </div>
                <div className='col3'>
                    <h4>FOLLOW</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

        </>
    )

}
export default Footer