import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  //{path: 'desafios', loadChildren: './desafios/desafios.module#DesafiosModule'},
  //{path: 'comunidade', loadChildren: './comunidade/comunidade.module#ComunidadeModule'},
  //{path: 'rankMAL', loadChildren: './rank-mal/rank-mal.module#RankMALModule'},
  //{path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule'}


];

export const routing = RouterModule.forRoot(routes)


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
