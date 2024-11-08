import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrasComponent } from './components/sobre-nosotras/sobre-nosotras.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ClubDeLecturaComponent } from './components/club-de-lectura/club-de-lectura.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { PagoComponent } from './components/pago/pago.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotras', component: SobreNosotrasComponent },
  { path: 'libreria', component: LibreriaComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'club-de-lectura', component: ClubDeLecturaComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
