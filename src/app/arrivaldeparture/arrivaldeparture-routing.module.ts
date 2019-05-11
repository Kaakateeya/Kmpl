import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrivaldepartureComponent } from './arrivaldeparture/arrivaldeparture.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
    component: ArrivaldepartureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrivaldepartureRoutingModule { }
