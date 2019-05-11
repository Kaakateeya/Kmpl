import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftRoutingModule } from './left-routing.module';
import { LeftComponent } from './left/left.component';

@NgModule({
  declarations: [LeftComponent],
  imports: [
    CommonModule,
    LeftRoutingModule
  ]
})
export class LeftModule { }
