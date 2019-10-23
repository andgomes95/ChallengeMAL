import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselHomeRegrasComponent } from '../carousel-home-regras/carousel-home-regras.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [HomeComponent,
    CarouselHomeRegrasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
