import React, { useState } from 'react';
import './styles.css';

const productList = [
    {id: 1, name: 'Tuscan Gold Extra Virgin Olive Oil', price: '£24.00', image: "/oliveOilProd.svg", collection: "Single Estate"},
    {id: 2, name: 'La Verdiana - Organic Olive Oil 2023', price: '£18.00', image: "/oliveOilProd.svg", collection: "Organic Selection"},
    {id: 3, name: 'Il Frantoio', price: '£22.50', image: "/oliveOilProd.svg", collection: "Limited Edition"},
    {id: 4, name: 'Oliva Nera Reserve', price: '£28.00', image: "/oliveOilProd.svg", collection: "Single Estate"},
    {id: 5, name: 'Cima di Cielo – Heritage Olive Oil', price: '£26.00', image: "/oliveOilProd.svg", collection: "Single Estate"},
    {id: 6, name: 'Montalcino Blend', price: '£32.00', image: "/oliveOilProd.svg", collection: "Limited Edition"},
    {id: 7, name: 'Luce di Toscana', price: '£21.00', image: "/oliveOilProd.svg", collection: "Organic Selection"},
    {id: 8, name: 'Giallo del Chiant', price: '£18.00', image: "/oliveOilProd.svg", collection: "Organic Selection"},
    {id: 9, name: 'Toscano Intenso ', price: '£24.00', image: "/oliveOilProd.svg", collection: "Single Estate"},
    {id: 10, name: 'Raffinato di Toscana ', price: '£18.50', image: "/oliveOilProd.svg", collection: "Single Estate"},
    {id: 11, name: 'Le Antiche Colline', price: '£26.00', image: "/oliveOilProd.svg", collection: "Limited Edition"},
    {id: 12, name: 'Truffle Infused Olive Oil', price: '£35.00', image: "/oliveOilProd.svg", collection: "Organic Selection"},
    {id: 13, name: 'Bella Vista ', price: '£32.00', image: "/oliveOilProd.svg", collection: "Organic Selection"},
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
            <div className='gold-underline-container'>
                <img src="public/gold-ul.svg" alt='gold underline' className="gold-underline"/>
            </div>
            <p>
                At Terra Tuscana, we craft small-batch, artisanal olive oils that reflect the rich diversity of the
                Tuscan landscape. From the robust flavors of rare olive varieties to the smooth, delicate notes of our
                more refined blends, we aim to introduce you to the authentic taste of Tuscany. Each bottle of our
                olive oil captures the essence of our sun-soaked groves, where tradition meets innovation to create
                the finest oils for your kitchen. Discover your new favorite olive oil with Terra Tuscana.
            </p>

            <div className="filter-section">
                <h2>Filter by Collection</h2>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Single Estate">Single Estate</option>
                    <option value="Organic Selection">Organic Selection</option>
                    <option value="Limited Edition">Limited Edition</option>
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
