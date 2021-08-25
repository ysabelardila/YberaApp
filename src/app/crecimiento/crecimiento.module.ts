import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

import { CrecimientoPageRoutingModule } from './crecimiento-routing.module';

import { CrecimientoPage } from './crecimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrecimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrecimientoPage]
})
export class CrecimientoPageModule {}
