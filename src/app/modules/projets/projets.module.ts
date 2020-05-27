import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { ProjetsComponent } from "src/app/pages/projets/projets.component";
import { ProjetComponent } from "src/app/pages/projet/projet.component";

@NgModule({
  declarations: [
    ProjetComponent,
    ProjetsComponent
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
