import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgMagnifierComponent } from './product-img-magnifier.component';

describe('ProductImgMagnifierComponent', () => {
    let component: ProductImgMagnifierComponent;
    let fixture: ComponentFixture<ProductImgMagnifierComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductImgMagnifierComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductImgMagnifierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
