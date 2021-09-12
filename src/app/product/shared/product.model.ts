import { Color } from './color.model';

export interface Product {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    promotion: number;
    image: string;
    color: Color;
}
