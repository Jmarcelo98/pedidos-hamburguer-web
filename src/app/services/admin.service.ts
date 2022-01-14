import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentProd } from 'src/environments/environment.prod';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // localhost
  private readonly URL_API = `${environment.URL_RAIZ}/admin`

  // na rede
  // private readonly URL_API = `${environmentProd.URL_RAIZ}/usuario`

  private readonly STORAGE_ADMIN = "ADMIN"

  adminStorage: Admin

  // na rede
  // private readonly URL_API = `${environmentProd.URL_RAIZ}/usuario`

  constructor(private httpClient: HttpClient) { }


  loginAdmin(admin: Admin) {
    return this.httpClient.post<Admin>(`${this.URL_API}/admin`, admin)
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

}
