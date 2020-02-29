import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CerealsComponent } from './cereals.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: CerealsComponent,
  },
];

@NgModule({
  declarations: [CerealsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CerealsComponent],
})
export class CerealsModule {}
