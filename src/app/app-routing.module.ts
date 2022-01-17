import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './pages/public/login-admin/login-admin.component';
import { PainelAdminComponent } from './pages/private/painel-admin/painel-admin.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PedidosComponent } from './pages/private/pedidos/pedidos.component';
import { AvaliarPedidoComponent } from './pages/private/avaliar-pedido/avaliar-pedido.component';
import { AutenticacaoPedido } from './guards/AutenticacaoPedido';

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
  },
  {
    path: 'avaliar',
    component: AvaliarPedidoComponent,
    canActivate: [AutenticacaoPedido]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
