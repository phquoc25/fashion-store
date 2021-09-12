import { Product } from './../shared/product.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-detail-tabs',
    templateUrl: './product-detail-tabs.component.html',
    styleUrls: ['./product-detail-tabs.component.scss'],
})
export class ProductDetailTabsComponent {
    @Input() product: Product;
    constructor() {}
}
