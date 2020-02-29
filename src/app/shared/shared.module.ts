import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDescriptionCardComponent } from './components/image-description-card/image-description-card.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ImageDescriptionCardComponent],
  imports: [CommonModule, LayoutModule],
  exports: [ImageDescriptionCardComponent],
})
export class SharedModule {}
