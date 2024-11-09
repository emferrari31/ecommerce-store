import React, { useState } from 'react';
import './styles.css';

const productList = [
    {id: 1, name: 'CANNED WINE CO. TASTING SELECTION', price: '£30.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 2, name: 'SPARKLING CHARDONNAY 2022', price: 'From £18.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 3, name: 'GRÜNER 2022', price: 'From £18.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 4, name: 'VIOGNIER 2022', price: 'From £18.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 5, name: 'GRENACHE ROSÉ 2023', price: 'From £18.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 6, name: 'ST LAURENT 2020', price: 'From £18.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 7, name: 'OLD VINE GARNACHA 2020', price: 'From £18.00', image: "/cannedWine.webp", collection: "varietal collection"},
    {id: 8, name: 'GAMAY 2021 - LOIRE VALLEY', price: 'From £18.00', image: "/cannedWine.webp", collection: "heritage collection"},
    {id: 9, name: 'VERDEJO 2022 - RUEDA', price: 'From £18.00', image: "/cannedWine.webp", collection: "heritage collection"},
    {id: 10, name: 'CANNED WINE CO. MIXED SELECTION | THE NATIONAL GALLERY EDITION', price: 'From £18.00', image: "/cannedWine.webp", collection: "national gallery edition"},
    {id: 11, name: 'GRÜNER 2021 | THE NATIONAL GALLERY EDITION', price: 'From £18.00', image: "/cannedWine.webp", collection: "national gallery edition"},
    {id: 12, name: 'OLD VINE GARNACHA 2020 | THE NATIONAL GALLERY EDITION', price: 'From £18.00', image: "/cannedWine.webp", collection: "national gallery edition"},
    {id: 13, name: 'GRENACHE ROSÉ 2021 | THE NATIONAL GALLERY EDITION', price: 'From £18.00', image: "/cannedWine.webp", collection: "national gallery edition"},
];

const ShopSection = ({ maxProducts }) => {
    const [filter, setFilter] = useState('');

    // Filter the product list based on the selected collection
    const filteredProducts = productList.filter((product) =>
        product.collection.toLowerCase().includes(filter.toLowerCase())
    );

    // Limit the number of products shown based on maxProducts
    const productsToDisplay = maxProducts ? filteredProducts.slice(0, maxProducts) : filteredProducts;

    return (
        <div className="shop-section">
            <h1>SHOP THE RANGE</h1>
            <div className='purple-underline-container'>
                <img src="public/purple-ul.svg" alt='purple underline' className="purple-underline"/>
            </div>
            <p>
                At Canned Wine Co. we have crafted a series of ranges that reflect the many differences wine has to
                offer.
                From unusual grape varieties to classical wine regions, rustic styles to more refined examples, we want
                to introduce you to your new favourite wine.
            </p>

            <div className="filter-section">
                <h2>Filter by Collection</h2>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="varietal collection">Varietal Collection</option>
                    <option value="heritage collection">Heritage Collection</option>
                    <option value="national gallery edition">National Gallery Edition</option>
                </select>
            </div>

            {/* Display filtered products */}
            <div className="product-list">
                {productsToDisplay.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    productsToDisplay.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image"/>
                            <h3>{product.name}</h3>
                            <h5>{product.price}</h5>
                        </div>
                    ))
                )}
            </div>
            {location.pathname === "/" && (
                <div className='button-container'>
                    <button className="view-full-btn">View full collection</button>
                </div>
            )}


        </div>
    );
};

export default ShopSection;
