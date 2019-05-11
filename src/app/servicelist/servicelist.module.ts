import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicelistRoutingModule } from './servicelist-routing.module';
import { ServicelistComponent } from './servicelist/servicelist.component';

@NgModule({
  declarations: [ServicelistComponent],
  imports: [
    CommonModule,
    ServicelistRoutingModule
  ]
})
export class ServicelistModule { }
