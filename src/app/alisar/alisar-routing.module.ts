import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlisarPage } from './alisar.page';

const routes: Routes = [
  {
    path: '',
    component: AlisarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlisarPageRoutingModule {}
