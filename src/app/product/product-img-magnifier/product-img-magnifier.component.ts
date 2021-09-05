import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-img-magnifier',
    templateUrl: './product-img-magnifier.component.html',
    styleUrls: ['./product-img-magnifier.component.scss'],
})
export class ProductImgMagnifierComponent {
    readonly top = '0';
    readonly right = '1';
    readonly imgWidth = '300';
    readonly imgHeight = '400';
    readonly lensewidth = '200';
    readonly lensheight = '200';
    readonly resultWidth = '60';
    readonly resultheight = '90';

    @Input() thumbImage: string;
    @Input() fullImage: string;
    constructor() {}
}
