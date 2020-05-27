import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjetsModule } from './modules/projets/projets.module';
import { ProposModule } from './modules/propos/propos.module';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjetsModule,
    ProposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
