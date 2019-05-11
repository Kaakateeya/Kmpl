import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyfatherComponent } from './myfather/myfather.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MyfatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyfatherRoutingModule { }
