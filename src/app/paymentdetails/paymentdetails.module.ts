import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentdetailsRoutingModule } from './paymentdetails-routing.module';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';

@NgModule({
  declarations: [PaymentdetailsComponent],
  imports: [
    CommonModule,
    PaymentdetailsRoutingModule
  ]
})
export class PaymentdetailsModule { }
