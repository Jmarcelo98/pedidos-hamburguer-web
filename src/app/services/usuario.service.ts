import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly URL_API = `${environment.URL_RAIZ}/usuario`

  constructor(private httpClient: HttpClient) { }

  verificarAdmin(nome: string) {
    return this.httpClient.get<boolean>(`${this.URL_API}/admin`, { params: { nome: nome } });
  }

}
