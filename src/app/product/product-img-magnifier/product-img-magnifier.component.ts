import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-img-magnifier',
    templateUrl: './product-img-magnifier.component.html',
    styleUrls: ['./product-img-magnifier.component.scss'],
})
export class ProductImgMagnifierComponent {
    @Input() thumbImage: string;
    @Input() fullImage: string;
    constructor() {}
}
