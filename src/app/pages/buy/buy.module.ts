import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buy1Component } from './buy1/buy1.component';
import { Buy2Component } from './buy2/buy2.component';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';

@NgModule({
  imports: [CommonModule, SharedmoduleModule],
  declarations: [Buy1Component, Buy2Component],
})
export class BuyModule {}
