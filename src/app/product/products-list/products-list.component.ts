import { SharedSubscriptionComponent } from './../../shared/shared-subscription/shared-subscription.component';
import { ProductsService } from './../shared/products.service';
import { Product } from './../shared/product.model';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent extends SharedSubscriptionComponent implements OnInit {
    products: Product[];
    constructor(private productsService: ProductsService) {
        super();
    }
    ngOnInit(): void {
        this.productsService
            .getAllProducts()
            .pipe(takeUntil(this.notifier))
            .subscribe((products) => {
                this.products = products;
            });
    }
}
