import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importo los componentes de rutas
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes a rutear
import { LoginComponent } from '../app/componentes/login/login.component';
import { RegistroComponent } from '../app/componentes/registro/registro.component';

// Constante de ruta
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }