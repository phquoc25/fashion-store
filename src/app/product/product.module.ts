import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent, ProductDetailComponent],
    imports: [CommonModule, AppRoutingModule],
    exports: [ProductsListComponent],
})
export class ProductModule {}
