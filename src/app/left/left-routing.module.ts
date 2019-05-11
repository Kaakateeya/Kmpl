import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftComponent } from './left/left.component';
const routes: Routes = [
  {
    path: '',
    component: LeftComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftRoutingModule { }
