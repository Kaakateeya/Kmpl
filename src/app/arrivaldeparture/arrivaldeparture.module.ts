import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrivaldepartureRoutingModule } from './arrivaldeparture-routing.module';
import { ArrivaldepartureComponent } from './arrivaldeparture/arrivaldeparture.component';

@NgModule({
  declarations: [ArrivaldepartureComponent],
  imports: [
    CommonModule,
    ArrivaldepartureRoutingModule
  ]
})
export class ArrivaldepartureModule { }
