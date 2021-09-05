import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailTabsComponent } from './product-detail-tabs.component';

describe('ProductDetailTabsComponent', () => {
    let component: ProductDetailTabsComponent;
    let fixture: ComponentFixture<ProductDetailTabsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductDetailTabsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductDetailTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
