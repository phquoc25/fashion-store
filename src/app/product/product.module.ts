import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { ImgMagnifier } from 'ng-img-magnifier';
import { ProductImgMagnifierComponent } from './product-img-magnifier/product-img-magnifier.component';
import { ProductDetailTabsComponent } from './product-detail-tabs/product-detail-tabs.component';
import { ProductShareComponent } from './product-share/product-share.component';
import { OrderOptionsComponent } from './order-options/order-options.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CategorySelectorComponent } from './category-selector/category-selector.component';

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductCardComponent,
        ProductDetailComponent,
        ProductImgMagnifierComponent,
        ProductDetailTabsComponent,
        ProductShareComponent,
        OrderOptionsComponent,
        CategorySelectorComponent,
    ],
    imports: [CommonModule, AppRoutingModule, ImgMagnifier, MatTabsModule],
    exports: [ProductsListComponent],
})
export class ProductModule {}
