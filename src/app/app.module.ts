import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { DatosPerfilComponent } from './components/datos-perfil/datos-perfil.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { FortyDebComponent } from './components/forty-deb/forty-deb.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    DatosPerfilComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    FortyDebComponent,
    ProyectosComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
