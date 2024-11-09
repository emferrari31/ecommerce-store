import './styles.css';

const ShopSection = () => {
    const productList = [
        {id: 1, name: 'CANNED WINE CO. TASTING SELECTION', price: '£30.00', image: "/cannedWine.webp"},
        {id: 2, name: 'SPARKLING CHARDONNAY 2022', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 3, name: 'GRÜNER 2022', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 4, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},

    ]
    return (
        <div className="shop-section">
            <h1>SHOP THE RANGE</h1>
            <div className='purple-underline-container'>
                <img src="public/purple-ul.svg" alt='purple underline' className="purple-underline"/>
            </div>
            <p>At Canned Wine Co. we have crafted a series of ranges that reflect the many differences wine has to offer. From unusual grape varieties to classical wine regions, rustic styles to more refined examples we want to introduce you to your new favourite wine. </p>
            <div className="product-list">
                {productList.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image"/>
                        <h3>{product.name}</h3>
                        <h5>{product.price}</h5>
                    </div>
                ))}
            </div>
            <div className='button-container'>
                <button className="view-full-btn">View full collection</button>
            </div>
        </div>
    )
}
export default ShopSection