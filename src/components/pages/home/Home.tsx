import Navbar from "../../header/Header";
import ProductCard from "../../productCard/productCard";
import {ClotheTypesEnum} from '../../../models/ClotheTypesEnum';
import Footer from '../../footer/Footer';
import "./Home.css";

const Home = () => {
    return(
        <div className="article__content">
            <Navbar/>

            <div className="row">
            <div className="hero">
                <div className="crop__container">
                    <img className="banner crop__image" alt="Model standing with a trolley" src="/man_trolley_hero.png" />
                </div>
            </div>
            </div>

            <section className="content__container">
                <div className="row">
                    <div className="row mini__header">
                        <h3>
                            New Arrivals
                        </h3>
                    </div>
                    <div className="product__container">
                        <ProductCard 
                            image='./burgundy_penny_loafers.png' 
                            desc="Wander Penny Loafers - Burgundy"
                            meta="Burgundy Penny Loafers Men Product Image"
                            price="$365.00"
                            type={ClotheTypesEnum.MEN_SHOE}
                        />
                        
                        <ProductCard 
                            image='./black_penny_loafers.png' 
                            desc="Wander Penny Loafers - Black"
                            meta="Black Penny Loafers Men Product Image"
                            price="$345.00"
                            type={ClotheTypesEnum.MEN_SHOE}
                        />
                        
                        <ProductCard 
                            image='./a_cream_mens_summer_classic_blazer_product_image.png' 
                            desc="Garden Summer Blazer - Cream"
                            meta="Men's Cream Summer Blazer Product Image"
                            price="$540.00"
                            type={ClotheTypesEnum.TOP}
                        />
                    </div>
                </div>
                <div className="row mini__header-bottom">
                        <a href="/">View More</a>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Home;