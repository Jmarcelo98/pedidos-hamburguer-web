import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UsuarioService } from "../services/usuario.service";

@Injectable({
    providedIn: 'root',
})

export class AutenticacaoUsuario implements CanActivate {

    constructor(public auth: UsuarioService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.auth.estaAutenticadoUsuario()) {
            this.router.navigate([''], {
                queryParams: {
                    redirectUri: state.url.replace('/', ''),
                },
            });
            return false;
        }
        return true;
    }

}