import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { ImgMagnifier } from 'ng-img-magnifier';
import { ProductImgMagnifierComponent } from './product-img-magnifier/product-img-magnifier.component';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent, ProductDetailComponent, ProductImgMagnifierComponent],
    imports: [CommonModule, AppRoutingModule, ImgMagnifier],
    exports: [ProductsListComponent],
})
export class ProductModule {}
