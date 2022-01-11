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

  private readonly STORAGE_ADMIN = "ADMIN"
  private readonly STORAGE_USUARIO = "USUARIO";

  adminStorage: Admin
  usuarioStorage: Usuario

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
    localStorage.setItem(this.STORAGE_USUARIO, window.btoa(JSON.stringify(usuario)));
  }

  getUsuario(): Usuario {
    return this.usuarioStorage = JSON.parse(window.atob(window.localStorage.getItem(this.STORAGE_USUARIO) || ''))
  }

  setAdmin(admin: Admin) {
    localStorage.setItem(this.STORAGE_ADMIN, window.btoa(JSON.stringify(admin)))
  }

  getAdmin(): Admin {
    return this.adminStorage = JSON.parse(window.atob(window.localStorage.getItem(this.STORAGE_ADMIN) || ''))
  }

  public estaAutenticadoAdmin(): boolean {
    const admin = localStorage.getItem(this.STORAGE_ADMIN)
    if (admin == null) {
      return false;
    }
    return true
  }

  public estaAutenticadoUsuario(): boolean {
    const admin = localStorage.getItem(this.STORAGE_USUARIO)
    if (admin == null) {
      return false;
    }
    return true
  }

}
