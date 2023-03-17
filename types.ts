export interface Response {
    [key: string]: Product[] | string;
};

export interface Brand {
    id:          number;
    brand:       string;
    image:       string;
    style:       string;
    substyle:    string;
    abv:         string;
    origin:      string;
    information: string;
    skus:        Skus[];
};

export interface Skus {
    code:         string;
    name:         string;
};

export interface Product {
    id:            number;
    brand:         string;
    image:         string;
    style:         string;
    substyle:      string;
    abv:           string;
    origin:        string;
    information:   string;
    code:          string;
    name:          string;
    [key: string]: any;
    stock:         number;
    price:         number;
};

export interface Prices {
    [key: string]: {
        stock: number;
        price: number;
    };
}