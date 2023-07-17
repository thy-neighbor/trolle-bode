import React, {useState} from 'react';
import { ClotheTypesEnum } from '../../models/ClotheTypesEnum';
import SizeIcons from './sizeIcon/SizeIcons';
import './productCard.css';

interface ProductProps {
    image: string,
    desc: string,
    meta: string,
    price: string,
    type: ClotheTypesEnum,
    //sizes?: sizeIcon[]
}

const ProductCard : React.FC<ProductProps> = ({image, desc, price, type}) => {

    const [isHovered,setIsHovered] = useState(false);

    return(
        <div className="product__card">
            <div className="product__crop__container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a><img className="crop__image" src={image} alt={desc}/></a>
                <SizeIcons type={type} isVisible={isHovered}/>
            </div>
            <div className="product__card__details">
                <p className="product__desc">{desc}</p>
                <p className="product__price">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;