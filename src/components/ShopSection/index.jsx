import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const productList = [
    {id: 1, name: 'Tuscan Gold Extra Virgin Olive Oil', price: '£24.00', image: "/oliveOilProd.svg", description: "Robust and full-bodied, this oil is perfect for dipping and drizzling.", collection: "Single Estate"},
    {id: 2, name: 'La Verdiana - Organic Olive Oil 2023', price: '£18.00', image: "/oliveOilProd.svg", description: "A smooth and delicate organic oil with notes of fresh herbs and green olives.", collection: "Organic Selection"},
    {id: 3, name: 'Il Frantoio', price: '£22.50', image: "/oliveOilProd.svg", description: "Rich, fruity, and well-balanced extra virgin olive oil from the heart of Tuscany.", collection: "Limited Edition"},    {id: 1, name: 'Tuscan Gold Extra Virgin Olive Oil', price: '£24.00', image: "/oliveOilProd.svg", description: "Robust and full-bodied, this oil is perfect for dipping and drizzling.", collection: "Single Estate"},
    {id: 4, name: 'Tuscan Gold Extra Virgin Olive Oil', price: '£24.00', image: "/oliveOilProd.svg", description: "Robust and full-bodied, this oil is perfect for dipping and drizzling.", collection: "Single Estate"},
    {id: 5, name: 'La Verdiana - Organic Olive Oil 2023', price: '£18.00', image: "/oliveOilProd.svg", description: "A smooth and delicate organic oil with notes of fresh herbs and green olives.", collection: "Organic Selection"},
    {id: 6, name: 'Il Frantoio', price: '£22.50', image: "/oliveOilProd.svg", description: "Rich, fruity, and well-balanced extra virgin olive oil from the heart of Tuscany.", collection: "Limited Edition"},    {id: 1, name: 'Tuscan Gold Extra Virgin Olive Oil', price: '£24.00', image: "/oliveOilProd.svg", description: "Robust and full-bodied, this oil is perfect for dipping and drizzling.", collection: "Single Estate"},
    {id: 7, name: 'Tuscan Gold Extra Virgin Olive Oil', price: '£24.00', image: "/oliveOilProd.svg", description: "Robust and full-bodied, this oil is perfect for dipping and drizzling.", collection: "Single Estate"},
    {id: 8, name: 'La Verdiana - Organic Olive Oil 2023', price: '£18.00', image: "/oliveOilProd.svg", description: "A smooth and delicate organic oil with notes of fresh herbs and green olives.", collection: "Organic Selection"},
    {id: 9, name: 'Il Frantoio', price: '£22.50', image: "/oliveOilProd.svg", description: "Rich, fruity, and well-balanced extra virgin olive oil from the heart of Tuscany.", collection: "Limited Edition"},
    {id: 10, name: 'Il Frantoio', price: '£22.50', image: "/oliveOilProd.svg", description: "Rich, fruity, and well-balanced extra virgin olive oil from the heart of Tuscany.", collection: "Limited Edition"},
];

const ShopSection = ({ maxProducts }) => {
    const [filter, setFilter] = useState('');

    const filteredProducts = productList.filter((product) =>
        product.collection.toLowerCase().includes(filter.toLowerCase())
    );

    const productsToDisplay = maxProducts ? filteredProducts.slice(0, maxProducts) : filteredProducts;

    return (
        <div className="shop-section">
            <h1>SHOP THE RANGE</h1>
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

            <div className="product-list">
                {productsToDisplay.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    productsToDisplay.map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/products/${product.name}`} style={{ textDecoration: 'none' }}>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <h3>{product.name}</h3>
                                <h5>{product.price}</h5>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ShopSection;
