import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconstruccionPage } from './reconstruccion.page';

const routes: Routes = [
  {
    path: '',
    component: ReconstruccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconstruccionPageRoutingModule {}
