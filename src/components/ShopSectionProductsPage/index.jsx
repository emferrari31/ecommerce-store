import './styles.css';

const ShopSectionProductsPage = () => {
    const productList = [
        {id: 1, name: 'CANNED WINE CO. TASTING SELECTION', price: '£30.00', image: "/cannedWine.webp"},
        {id: 2, name: 'SPARKLING CHARDONNAY 2022', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 3, name: 'GRÜNER 2022', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 4, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 5, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 6, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 7, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 8, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 9, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 10, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 11, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 12, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 13, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},
        {id: 14, name: 'VIOGNIER', price: 'From £18.00', image: "/cannedWine.webp"},

    ]
    return (
        <div className="shop-section-page">
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
        </div>
    )
}
export default ShopSectionProductsPage