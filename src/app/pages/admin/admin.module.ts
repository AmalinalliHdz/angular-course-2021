import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { SharedmoduleModule } from '../../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [CommonModule, SharedmoduleModule],
  declarations: [Admin1Component, Admin2Component],
  exports: [Admin1Component],
})
export class AdminModule {}
