import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private readonly productWsUrl = 'http://localhost:8080/product-ws';
    private readonly products$: Observable<Product[]>;

    constructor(private readonly httpClient: HttpClient) {
        this.products$ = this.httpClient.get<Product[]>(`${this.productWsUrl}/products`);
    }

    getAllProducts(): Observable<Product[]> {
        return this.products$;
    }

    getProductById(productId: number): Observable<Product> {
        return this.products$.pipe(map((products) => products.find((product) => product.id === productId)));
    }
}
