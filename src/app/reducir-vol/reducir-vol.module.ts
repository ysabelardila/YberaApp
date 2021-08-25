import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

import { ReducirVolPageRoutingModule } from './reducir-vol-routing.module';

import { ReducirVolPage } from './reducir-vol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReducirVolPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReducirVolPage]
})
export class ReducirVolPageModule {}
