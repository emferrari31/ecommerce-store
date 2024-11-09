import './styles.css';

const AddToWeeklyShop = () => {
    const stockists = [
        {id: 1, name: 'Stockist1', image: "public/waitrose.webp"},
        {id: 2, name: 'Stockist2', image: "public/ocado.webp"},
        {id: 3, name: 'Stockist3', image: "public/booths.avif"}
    ]

    return (
        <div className="stockist-section">
            <h1>ADD TO YOUR WEEKLY SHOP</h1>
            <div className='purple-underline-container'>
                <img src="public/purple-ul.svg" alt='purple underline' className="purple-underline"/>
            </div>
            <div className="brand-list">
                {stockists.map(stockist => (
                    <div key={stockist.id}>
                        <img src={stockist.image} alt={stockist.name} className="brand-logo"/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default AddToWeeklyShop