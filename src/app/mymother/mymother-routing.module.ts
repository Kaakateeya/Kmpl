import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MymotherComponent } from './mymother/mymother.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MymotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MymotherRoutingModule { }
