import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { LoginAdminComponent } from './pages/private/login-admin/login-admin.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PainelAdminComponent } from './pages/private/painel-admin/painel-admin.component';
import { PedidosComponent } from './pages/public/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginAdminComponent,
    NavBarComponent,
    PainelAdminComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
