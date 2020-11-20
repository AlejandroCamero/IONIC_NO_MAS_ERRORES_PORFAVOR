import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderwithoutbackComponent } from './headerwithoutback/headerwithoutback.component';



@NgModule({
  declarations: [HeaderComponent,HeaderwithoutbackComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
  HeaderComponent,
  HeaderwithoutbackComponent
 ]
})
export class ComponentsModule { }
