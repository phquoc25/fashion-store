import { WomenComponent } from './women/women.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
