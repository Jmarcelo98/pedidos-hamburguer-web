import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { LoginAdminComponent } from './pages/public/login-admin/login-admin.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PainelAdminComponent } from './pages/private/painel-admin/painel-admin.component';
import { PedidosComponent } from './pages/private/pedidos/pedidos.component';
import { ToastrModule } from 'ngx-toastr';
import { AvaliarPedidoComponent } from './pages/private/avaliar-pedido/avaliar-pedido.component';
import { ConfirmacaoDialogComponent } from './component/confirmacao-dialog/confirmacao-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginAdminComponent,
    NavBarComponent,
    PainelAdminComponent,
    PedidosComponent,
    AvaliarPedidoComponent,
    ConfirmacaoDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
