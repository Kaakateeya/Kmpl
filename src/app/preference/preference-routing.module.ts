import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferenceComponent } from './preference/preference.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: PreferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenceRoutingModule { }
