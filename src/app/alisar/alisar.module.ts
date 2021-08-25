import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

import { AlisarPageRoutingModule } from './alisar-routing.module';

import { AlisarPage } from './alisar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlisarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlisarPage]
})
export class AlisarPageModule {}
