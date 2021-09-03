import { Component } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
    nbProducts = [1, 2, 3, 4, 5, 6];
    constructor() {}
}
