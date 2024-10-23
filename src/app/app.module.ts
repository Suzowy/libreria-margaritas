import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { SobreNosotrasComponent } from './components/sobre-nosotras/sobre-nosotras.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ClubDeLecturaComponent } from './components/club-de-lectura/club-de-lectura.component';
import { BlogComponent } from './components/blog/blog.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ClubDeLecturaComponent,
    ContactoComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LibreriaComponent,
    SobreNosotrasComponent,
    TalleresComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
