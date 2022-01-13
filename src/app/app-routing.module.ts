import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoAdmin } from './guards/AutenticacaoAdmin';
import { AutenticacaoUsuario } from './guards/AutenticaoUsuario';
import { LoginAdminComponent } from './pages/private/login-admin/login-admin.component';
import { PainelAdminComponent } from './pages/private/painel-admin/painel-admin.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PedidosComponent } from './pages/public/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LoginAdminComponent
  },
  {
    path: 'admin/painel',
    component: PainelAdminComponent,
    // canActivate: [AutenticacaoAdmin]
  },
  {
    path: 'criar-pedido',
    component: PedidosComponent,
    // canActivate: [AutenticacaoUsuario]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
