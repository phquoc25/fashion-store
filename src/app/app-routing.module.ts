import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CollectionComponent } from './collection/collection.component';
import { WomenComponent } from './women/women.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { AuthGuard } from './utility/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'men', component: MenComponent, canActivate: [AuthGuard] },
    { path: 'women', component: WomenComponent, canActivate: [AuthGuard] },
    { path: 'collections', component: CollectionComponent, canActivate: [AuthGuard] },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
