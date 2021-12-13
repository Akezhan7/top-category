export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface ReviewModel {
    _id: string;
    name: string;
    description: string;
    rating: number;
    crearedAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string[];
    link: string[];
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: ProductCharacteristic[];
    crearedAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: number;
    reviews: any[];
    reviewCount: number;
    reviewAvg?: number;
    advantages: string;
}