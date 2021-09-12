import { Product } from './../shared/product.model';
import { Component } from '@angular/core';
import { COLORS } from '../shared/color.model';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
    product: Product = {
        id: 1,
        title: "Premium Denim Women's Hidden",
        description: 'product description',
        price: 179,
        promotion: 15,
        image: 'pi4.jpg',
        color: COLORS.BLACK,
    };
    constructor() {}
}
