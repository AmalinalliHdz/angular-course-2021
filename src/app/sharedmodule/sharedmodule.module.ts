import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, LoaderComponent],
})
export class SharedmoduleModule {}
