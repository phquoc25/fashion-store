import { COLORS } from './../shared/color.model';
import { Product } from './../shared/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
    products: Product[];
    constructor() {}
    ngOnInit(): void {
        this.products = [
            {
                id: 1,
                title: "Premium Denim Women's Hidden",
                description: 'product description',
                price: 179,
                promotion: 15,
                image: 'pi4.jpg',
                color: COLORS.BLACK,
            },
            {
                id: 2,
                title: "Premium Denim Women's Hidden",
                description: 'product description',
                price: 179,
                promotion: 15,
                image: 'pi.jpg',
                color: COLORS.YELLOW,
            },
            {
                id: 3,
                title: "Premium Denim Women's Hidden",
                description: 'product description',
                price: 179,
                promotion: 15,
                image: 'pi5.jpg',
                color: COLORS.ORANGE,
            },
            {
                id: 4,
                title: "Premium Denim Women's Hidden",
                description: 'product description',
                price: 179,
                promotion: 15,
                image: 'pi6.jpg',
                color: COLORS.PRUNE,
            },
            {
                id: 5,
                title: "Premium Denim Women's Hidden",
                description: 'product description',
                price: 179,
                promotion: 15,
                image: 'pi4.jpg',
                color: COLORS.PURPLE,
            },
            {
                id: 6,
                title: "Premium Denim Women's Hidden",
                description: 'product description',
                price: 179,
                promotion: 15,
                image: 'pi4.jpg',
                color: COLORS.PINK,
            },
        ];
    }
}
