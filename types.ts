export interface ResponseProduct {
    [key: string]: string | Product;
};

export interface ResponseStockPrice {
    [key: string]: string | {
        stock: number;
        price: number;
    };
};

export interface ResponseProducts {
    [key: string]: Product[] | string;
};

export interface Product {
    id:             number;
    brand:          string;
    image:          string;
    style:          string;
    substyle:       string;
    abv:            string;
    origin:         string;
    information:    string;
    skus:           Skus[];
    stock?:         number;
    price?:         number;
    [key: string]:  any;
};

export interface Skus {
    code:         string;
    name:         string;
};

export interface Prices {
    [key: string]: {
        stock: number;
        price: number;
    };
};

export interface CardProps {
    id:    number;
    brand: string;
    image: string;
    price: number;
    idx:   number;
};

export interface TextProps {
    text:      string;
    maxHeight: number;
}