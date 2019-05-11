import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { BasicsComponent } from './basics/basics.component';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { ZoomableCanvasComponent } from '@durwella/zoomable-canvas';
@NgModule({
  declarations: [BasicsComponent,
    //  ZoomableCanvasComponent
    ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    // FormsModule,
    // HttpModule 
  ]
})
export class BasicsModule { }
