import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: PaymentdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentdetailsRoutingModule { }
