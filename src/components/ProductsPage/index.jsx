import OurWinesHeroSection from "../OurOliveOilSection/index.jsx";
import ShopSection from "../ShopSection/index.jsx";
import Footer from "../Footer/index.jsx";
import IconBarFreeDelivery from "../IconBarFreeDelivery/index.jsx";

const ProductsPage = () => {
    return (
        <>
            <OurWinesHeroSection />
            <ShopSection /> {/* Show all products on the shop page */}
            <IconBarFreeDelivery />
            <Footer />
        </>
    )
}

export default ProductsPage;
