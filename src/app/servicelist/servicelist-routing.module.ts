import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: ServicelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicelistRoutingModule { }
