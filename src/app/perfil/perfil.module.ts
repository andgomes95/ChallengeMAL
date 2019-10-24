import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
  {path: '', component: PerfilComponent}
];

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PerfilModule { }
