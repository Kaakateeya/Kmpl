import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstroComponent } from './astro/astro.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: AstroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstroRoutingModule { }
