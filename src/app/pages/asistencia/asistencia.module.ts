import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPageRoutingModule } from './asistencia-routing.module';

import { AsistenciaPage } from './asistencia.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ComponentsModule } from 'src/app/components/components.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaPageRoutingModule,
    NgCalendarModule,
    ComponentsModule
  ],
  declarations: [AsistenciaPage],
  providers:[
      {provide: LOCALE_ID, useValue: 'es-ES'}
  ]
})
export class AsistenciaPageModule {}
