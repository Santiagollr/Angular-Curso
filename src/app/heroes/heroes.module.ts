import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { Listado2Component } from './listado2/listado2.component';


@NgModule({
  declarations: [
    HeroeComponent,
    Listado2Component
  ],
  exports: [
    Listado2Component
  ],
  imports: [
    CommonModule
  ]

})
export class HeroesModule {}
