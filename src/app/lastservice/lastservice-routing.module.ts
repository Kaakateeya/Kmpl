import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastserviceComponent } from './lastservice/lastservice.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: LastserviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastserviceRoutingModule { }
