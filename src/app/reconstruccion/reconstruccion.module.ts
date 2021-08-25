import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

import { ReconstruccionPageRoutingModule } from './reconstruccion-routing.module';

import { ReconstruccionPage } from './reconstruccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconstruccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReconstruccionPage]
})
export class ReconstruccionPageModule {}
