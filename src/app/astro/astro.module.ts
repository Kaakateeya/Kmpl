import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstroRoutingModule } from './astro-routing.module';
import { AstroComponent } from './astro/astro.component';

@NgModule({
  declarations: [AstroComponent],
  imports: [
    CommonModule,
    AstroRoutingModule
  ]
})
export class AstroModule { }
