import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../../productCard/productCard';
import { ClotheTypesEnum } from '../../../models/ClotheTypesEnum';
import Footer from '../../footer/Footer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Navbar from "../../header/Header";
import Pagination from '@mui/material/Pagination';
import './Collections.css';
import FilterModalWithRef from '../../modal/FilterModal';


type Props = {}

function Collections({}: Props) {

    const [isClicked,setisClicked] = useState(false);

    const filterComponentRef : React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const filterButtonRef : React.RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (filterComponentRef.current && !filterComponentRef.current.contains(event.target as Node)
            && filterButtonRef.current && !filterButtonRef.current.contains(event.target as Node)){

          setisClicked(false);
        }
      };

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
          handleClickOutside(event);
        };
    
        document.addEventListener('mousedown', handleClick);
    
        return () => {
          document.removeEventListener('mousedown', handleClick);
        };
      }, [isClicked]);

    return (
        <div className="Collections__container">
            <Navbar/>
            <section className="content__container">
                <div className="row">
                    <div className="row mini__header">
                        <p className="miniHeader__title bold">
                            New Arrivals
                        </p>
                        <button className="filter__btn button__clearStyle" onClick={() => setisClicked(!isClicked)} ref={filterButtonRef}>
                            <a className="filter__title" href="#filter" >Filter</a>
                            <ArrowDropDownIcon className={`arrow-icon${isClicked ? " flip": ""}`} />
                        </button>
                        <FilterModalWithRef isVisible={isClicked} handleExitEvent={()=>{}} ref={filterComponentRef}/>
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
                    <Pagination count={10}/>
                </div>
            </section>
            <Footer/>
        </div>
        
    )
}

export default Collections;