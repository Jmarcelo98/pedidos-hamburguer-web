import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly URL_API = `${environment.URL_RAIZ}/usuario`

  constructor(private httpClient: HttpClient) { }

  verificarAdmin(nome: string) {
    return this.httpClient.get<boolean>(`${this.URL_API}/verificar-admin`, { params: { nome: nome } });
  }

  loginUsuario(usuario: Usuario) {
    return this.httpClient.post<Usuario>(this.URL_API, usuario);
  }

  loginAdmin(admin: Admin) {
    return this.httpClient.post<Admin>(`${this.URL_API}/admin`, admin)
  }

  setUsuario(usuario: Usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

}
