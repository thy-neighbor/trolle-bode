import './Product.css';
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../../productCard/productCard';
import { ClotheTypesEnum } from '../../../models/ClotheTypesEnum';
import Footer from '../../footer/Footer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Navbar from "../../header/Header";
import { bottomSizeLegend } from '../../productCard/sizeIcon/SizeIcons';
import { sizeIcon } from '../../productCard/sizeIcon/sizeIconType';
import DropdownInput from './DropdownInput';

type Props = {
    match? : String
}

type DataType = {
    id : BigInt
    price : String
    name : String
    category : String
    subCategory : String[]
    description : String
    fit : String
    material : String
    locationSourced : String
    care : String
    type : String
    color : String[] 
    sizes : sizeIcon[]
    url : String
    images : String[]
};

const data = {
    price: "365.00",
    name: "Wander Penny Loafers - Burgundy",
    category: "Menswear",
    subCategory : ["New Arrivals", "Shoes"],
    description : "Designed to be worn by individuals with impeccable taste, our Burgundy Penny Loafers are the perfect addition to your footwear collection. Embrace sophistication and make a lasting impression with every stride in these luxurious loafers.",
    fit : "Wide fit",
    material : "100% Leather",
    locationSourced : "USA",
    care : null,
    type : "Shoes",
    color : ["Blue", "Red"] ,
    sizes : bottomSizeLegend,
    url : "/",
    images : ['./burgundy-shoes/burgundy_penny_loafers.png', './burgundy-shoes/single_side_profile_burgubdy_penny_loafers.png', './side_profile_burgundy_penny_loafers.png', './burgundy-shoes/back_profile_burgundy_penny_loafers.png']
}

function Product({}: Props) {

    const sizeOptions : string[] = data.sizes.map((element) => element.size);
    return (
        <div className="Product__container">
                <Navbar/>
                <section className="row Product__content-container">
                    <div className="Product__top-content-container">
                        <div className="Product__details-container">
                            <div className="Product__details-title">
                                {data.name}
                            </div>
                            <div className='Product__details-items'>
                                <p>{data.description ? data.description : ""}</p>
                                <br/>
                                <p>{data.fit ? data.fit : ""}</p>
                                <p>{data.material ? data.material : ""}</p>
                                <p>{data.locationSourced ? `Made in ${data.locationSourced}` : ""}</p>
                                <p>{data.care ? data.care : ""}</p>
                                <br/>
                                <a href={`/collections/${data.type}`}>View all {data.type}</a>

                                <p>All wear, mending, and idiosyncrasies are unique to the original textile.</p>
                                <button className="button__clearStyle">Sizing information</button>
                            </div>
                        </div>
                        <div className="Product__images-container">
                            {/**Imagesss */}
                        </div>
                        <div className="Product__options-container">
                            <div className="Product__options-content">
                                <div className="Product__options-price">${data.price}</div>
                                <DropdownInput options={sizeOptions} onSelect={() => {}} />
                                <div className='Product__options-button__container'>
                                    <button className="Product__options-button button__clearStyle">Add to Bag</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mini__header-bottom">
                        <div className="product__container">
                            <ProductCard 
                                image='./burgundy-shoes/burgundy_penny_loafers.png' 
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
                </section>
                <Footer/>
            </div>
    )
}

export default Product;