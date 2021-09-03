import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent],
    imports: [CommonModule],
    exports: [ProductsListComponent],
})
export class ProductModule {}
