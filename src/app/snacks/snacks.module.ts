import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnacksComponent } from './snacks.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: SnacksComponent,
  },
];

@NgModule({
  declarations: [SnacksComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SnacksModule {}
