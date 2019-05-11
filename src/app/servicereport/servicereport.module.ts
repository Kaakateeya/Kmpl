import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicereportRoutingModule } from './servicereport-routing.module';
import { ServicereportComponent } from './servicereport/servicereport.component';

@NgModule({
  declarations: [ServicereportComponent],
  imports: [
    CommonModule,
    ServicereportRoutingModule
  ]
})
export class ServicereportModule { }
