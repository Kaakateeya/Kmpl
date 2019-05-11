import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicereportComponent } from './servicereport/servicereport.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: ServicereportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicereportRoutingModule { }
