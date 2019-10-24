import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
  {path: '', component: PerfilComponent}
];

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [RouterModule]
})
export class PerfilModule { }
