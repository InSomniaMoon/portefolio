import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projets', loadChildren: () => import("./modules/projets/projets.module").then(m => m.ProjetsModule) },
  { path: 'parcours', component: ParcoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
