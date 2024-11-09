import './styles.css';

const BrandAssoc = () => {
    const brandAssoc = [
        {id: 1, name: 'Brand1', image: "public/brandlogo1.svg"},
        {id: 2, name: 'Brand2', image: "public/brandlogo2.svg"},
        {id: 3, name: 'Brand3', image: "public/brandlogo3.svg"},
        {id: 4, name: 'Brand4', image: "public/brandlogo4.svg"},
        {id: 5, name: 'Brand5', image: "public/brandlogo5.svg"},
        {id: 6, name: 'Brand6', image: "public/brandlogo6.svg"},
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