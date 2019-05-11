import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyfatherRoutingModule } from './myfather-routing.module';
import { MyfatherComponent } from './myfather/myfather.component';

@NgModule({
  declarations: [MyfatherComponent],
  imports: [
    CommonModule,
    MyfatherRoutingModule
  ]
})
export class MyfatherModule { }
