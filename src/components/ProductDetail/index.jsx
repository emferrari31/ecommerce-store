import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import Footer from "../Footer/index.jsx";

// Product list as a sample (you might want to import this from a central data file)
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

const ProductDetail = ({ addToBasket }) => {
    const { productName } = useParams(); // Get productName from URL
    const product = productList.find(p => p.name === productName); // Find the product by name

    if (!product) {
        return <p>Product not found</p>;
    }

    const { name, price, image, description } = product;

    const handleAddToBasket = () => {
        addToBasket(product); // Add product to cart
    };

    return (
        <div className="product-detail-container">
            <img src={image} alt={name} className="product-image"/>
            <div className='product-detail'>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>{price}</h3>
                <button className="add-to-basket-btn" onClick={handleAddToBasket}>Add to Basket</button>
            </div>

        </div>
    );
};
<Footer />
export default ProductDetail;
