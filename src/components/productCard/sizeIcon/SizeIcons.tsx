import React from 'react';
import {ClotheTypesEnum} from '../../../models/ClotheTypesEnum';
import { sizeIcon } from './sizeIconType';
import './SizeIcon.css';

// format for react-select
//export const colourOptions: readonly ColourOption[] = [
// { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
// { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
// { value: 'purple', label: 'Purple', color: '#5243AA' },
// { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
// { value: 'orange', label: 'Orange', color: '#FF8B00' },
// { value: 'yellow', label: 'Yellow', color: '#FFC400' },
// { value: 'green', label: 'Green', color: '#36B37E' },
// { value: 'forest', label: 'Forest', color: '#00875A' },
// { value: 'slate', label: 'Slate', color: '#253858' },

export const topSizeLegend : sizeIcon[] = [
    {size: "XS/S", inStock: true},
    {size: "S/M", inStock: true},
    {size: "M/L", inStock: true},
    {size: "L/XL", inStock: true},
    {size: "XXL", inStock: true}
];

function populateNumericSizeLegend(start:number, end:number, increment:number = 1) : sizeIcon[]{

    let arr : sizeIcon[] = [];

    if(end < start){
        console.error("Invalid inputs in productCard::populateNumericSizeLegend");
    }

    for(let i=start; i <=end ; i+=increment)
        arr.push({size: `${i}`, inStock: true});

    return arr;
}

export const bottomSizeLegend : sizeIcon[] = populateNumericSizeLegend(25,40);
export const menShoeSizeLegend : sizeIcon[] = populateNumericSizeLegend(8,13);
export const womenShoeSizeLegend : sizeIcon[] = populateNumericSizeLegend(6,11);
export const dressSizeLegend : sizeIcon[] = populateNumericSizeLegend(0, 12 , 2);

export const oneSize : sizeIcon[] = [
    {size: "OS", inStock: true},
];

export function produceSizeLegend(type : ClotheTypesEnum) : sizeIcon[]{

    switch(type) {
        case(ClotheTypesEnum.TOP) : 
            return(topSizeLegend);
        case(ClotheTypesEnum.BOTTOM) : 
            return(bottomSizeLegend);
        case(ClotheTypesEnum.DRESS) :
            return(dressSizeLegend);
        case(ClotheTypesEnum.MEN_SHOE) :
            return(menShoeSizeLegend);
        case(ClotheTypesEnum.WOMEN_SHOE) :
            return(womenShoeSizeLegend);
        default:
            return topSizeLegend;
    }
};

interface SizeIconProps {
    type: ClotheTypesEnum,
    isVisible: boolean,
    //sizeArray: sizeIcon[]
}

const SizeIcons:React.FC<SizeIconProps> = ({type, isVisible}) => {

    const sizes : sizeIcon[] = produceSizeLegend(type);

    const iconElements = sizes.map((element: sizeIcon, index: number) => {

        let spanStyle: string = element.inStock ? "" : " size__crossBox";

        return(
            <li key={index}>
                <span className={"size__box" + spanStyle}>{element.size}</span>
            </li>
        );
    });

    console.log(iconElements);

    return(
        <ul className={`size__list list__clearStyle${isVisible ? "": " hidden"}`}>
            {iconElements}
        </ul>
        
    );
}

export default SizeIcons;