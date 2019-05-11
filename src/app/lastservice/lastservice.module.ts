import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastserviceRoutingModule } from './lastservice-routing.module';
import { LastserviceComponent } from './lastservice/lastservice.component';

@NgModule({
  declarations: [LastserviceComponent],
  imports: [
    CommonModule,
    LastserviceRoutingModule
  ]
})
export class LastserviceModule { }
