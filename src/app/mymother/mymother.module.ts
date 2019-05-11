import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymotherRoutingModule } from './mymother-routing.module';
import { MymotherComponent } from './mymother/mymother.component';

@NgModule({
  declarations: [MymotherComponent],
  imports: [
    CommonModule,
    MymotherRoutingModule
  ]
})
export class MymotherModule { }
