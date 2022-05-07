import { ProductModule } from './product/product.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CollectionComponent } from './collection/collection.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        MenComponent,
        WomenComponent,
        CollectionComponent,
        NavbarComponent,
        BannerComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ProductModule, BrowserAnimationsModule, KeycloakAngularModule],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
