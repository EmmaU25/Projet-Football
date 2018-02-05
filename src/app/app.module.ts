import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import { app_routing } from "./app.routes";
  
import { AppComponent } from './app.component';
import { liguesComponent } from './components/ligues.component';
import { geoComponent } from './components/geo.component';
import { IndexComponent } from './components/index.component';
import {LiguesServices} from './services/ligues.services'
import { ligueModel } from './models/ligueModel'

@NgModule({
  declarations: [
    AppComponent,
    liguesComponent,
    geoComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [LiguesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
