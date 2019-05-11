import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: PasswordchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordchangeRoutingModule { }
