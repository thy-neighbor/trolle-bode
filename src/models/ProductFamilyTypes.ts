export type ImageDetails = {
    id? : String
    url : String
    name : String
    altText : String
    isMain : Boolean
};

export type SizeItem = {
    id? : String
    sizeTitle : String
    numericSize : Number
    type : String
    category : String
}

export type SizeQuantity = {
    id? : String
    sizeItem : SizeItem
    quantity : Number
    sku : String
    variantSku : String
}

export type ProductParent = {
    id? : String
    sku : String
    products : [Product]
    name : String
    category : String
    subCategories : [String]
    description : String
    fit : String
    material : String
    locationSourced : String
    care : String
    type : String
    extraDetails : [String]
    active : Boolean
}

export type Product = {
    id? : String
    sku : String
    variantSku : String
    name : String
    color : String
    sizeQuantities : [SizeQuantity]
    images : [ImageDetails]
    active : Boolean
    url : String
    isMain : Boolean
}