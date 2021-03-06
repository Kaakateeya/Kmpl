import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonmenuComponent} from './commonmenu/commonmenu/commonmenu.component';
import { LeftComponent } from './left/left/left.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CommonmenuComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
