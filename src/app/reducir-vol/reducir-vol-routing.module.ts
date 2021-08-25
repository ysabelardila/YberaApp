import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReducirVolPage } from './reducir-vol.page';

const routes: Routes = [
  {
    path: '',
    component: ReducirVolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReducirVolPageRoutingModule {}
