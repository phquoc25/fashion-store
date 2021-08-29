import { NgModule } from '@angular/core';
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
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
