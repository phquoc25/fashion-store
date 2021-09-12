import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { SharedSubscriptionComponent } from './../../shared/shared-subscription/shared-subscription.component';
import { Product } from './../shared/product.model';
import { ProductsService } from './../shared/products.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent extends SharedSubscriptionComponent implements OnInit {
    product: Product;
    constructor(private route: ActivatedRoute, private productsService: ProductsService) {
        super();
    }

    ngOnInit(): void {
        this.getProduct();
    }

    private getProduct() {
        const productId = this.route.snapshot.paramMap.get('id');
        this.productsService
            .getProductById(+productId)
            .pipe(takeUntil(this.notifier))
            .subscribe((product) => (this.product = product));
    }
}
