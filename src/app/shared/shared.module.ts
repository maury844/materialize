import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDescriptionCardComponent } from './components/image-description-card/image-description-card.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ImageDescriptionCardComponent, ProductCardComponent],
  imports: [CommonModule, LayoutModule],
  exports: [ImageDescriptionCardComponent, ProductCardComponent],
})
export class SharedModule {}
