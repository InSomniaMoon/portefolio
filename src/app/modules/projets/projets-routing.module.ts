import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetsComponent } from 'src/app/pages/projets/projets.component';
import { ProjetComponent } from 'src/app/pages/projet/projet.component';


const routes: Routes = [
  { path: '', component: ProjetsComponent },
  { path: ':id', component: ProjetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
