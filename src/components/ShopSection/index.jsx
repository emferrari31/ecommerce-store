import './styles.css';

const ShopSection = () => {
    const productList = [
        {id: 1, name: 'Sauvingon Blanc', price: '£20', image: "public/whitewine.jpg"},
        {id: 2, name: 'Riesling', price: '£30', image: "public/whitewine.jpg"},
        {id: 3, name: 'Pinot Noir', price: '£24', image: "public/whitewine.jpg"},
        {id: 4, name: 'Merlot', price: '£37', image: "public/whitewine.jpg"},
    ]

    return (
        <div className="shop-section">
            <h1>SHOP THE RANGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. </p>
            <div className="product-list">
                {productList.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image"/>
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>
                        <button>Add to cart</button>
                    </div>
                ))}

            </div>
            <div className='button-container'>
                <button className="view-full-btn">View full collection</button>
            </div>
        </div>
    )
}

// const ShopSection = () => {
//     return (
//         <section>
//             <h1>SHOP THE RANGE</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//                 ut aliquip ex ea commodo consequat. </p>
//         </section>
//     );
// };

export default ShopSection