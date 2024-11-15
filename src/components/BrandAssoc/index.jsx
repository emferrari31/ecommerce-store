import './styles.css';

const BrandAssoc = () => {
    const brandAssoc = [
        {id: 1, name: 'Brand1', image: "brandlogo1.svg"},
        {id: 2, name: 'Brand2', image: "brandlogo2.svg"},
        {id: 3, name: 'Brand3', image: "brandlogo3.svg"},
        {id: 4, name: 'Brand4', image: "brandlogo4.svg"},
        {id: 5, name: 'Brand5', image: "brandlogo5.svg"},
        {id: 6, name: 'Brand6', image: "brandlogo6.svg"},
    ]

    return (
        <div className="brand-assoc">
            <div className="brand-list">
                {brandAssoc.map(brand => (
                    <div key={brand.id}>
                        <img src={brand.image} alt={brand.name} className="brand-logo"/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default BrandAssoc