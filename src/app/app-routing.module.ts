import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cereals',
    loadChildren: () =>
      import('./cereals/cereals.module').then(mod => mod.CerealsModule),
  },
  {
    path: 'snacks',
    loadChildren: () =>
      import('./snacks/snacks.module').then(mod => mod.SnacksModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
