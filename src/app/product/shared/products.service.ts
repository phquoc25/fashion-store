import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { COLORS } from './color.model';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private products: Product[] = [
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
    private readonly products$ = of(this.products);

    constructor() {}

    getAllProducts(): Observable<Product[]> {
        return this.products$;
    }

    getProductById(productId: number): Observable<Product> {
        return this.products$.pipe(map((products) => products.find((product) => product.id === productId)));
    }
}
