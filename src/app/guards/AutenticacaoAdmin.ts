import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AdminService } from "../services/admin.service";
import { UsuarioService } from "../services/usuario.service";

@Injectable({
    providedIn: 'root',
})

export class AutenticacaoAdmin implements CanActivate {

    constructor(public auth: AdminService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.auth.estaAutenticadoAdmin()) {
            this.router.navigate(['admin'], {
                queryParams: {
                    redirectUri: state.url.replace('/', ''),
                },
            });
            return false;
        }
        return true;
    }

}