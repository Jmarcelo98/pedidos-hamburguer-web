import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Pedido } from "../models/pedido";
import { PedidosComponent } from "../pages/private/pedidos/pedidos.component";
import { PedidoService } from "../services/pedido.service";
import { UsuarioService } from "../services/usuario.service";

@Injectable({
    providedIn: 'root',
})

export class AutenticacaoPedido implements CanActivate {

    constructor(public auth: UsuarioService, public pedidoService: PedidoService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.auth.estaAutenticadoUsuario()) {
            this.router.navigate([''], {
                queryParams: {
                    redirectUri: state.url.replace('/', ''),
                },
            });
            return false;
        } else if (!this.pedidoService.fezPedido()) {
            this.router.navigate(['criar-pedido'], {
                queryParams: {
                    redirectUri: state.url.replace('avaliar', 'criar-pedido'),
                },
            })
        }
        return true;
    }

}