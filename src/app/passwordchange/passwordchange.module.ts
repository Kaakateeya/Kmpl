import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordchangeRoutingModule } from './passwordchange-routing.module';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';

@NgModule({
  declarations: [PasswordchangeComponent],
  imports: [
    CommonModule,
    PasswordchangeRoutingModule
  ]
})
export class PasswordchangeModule { }
