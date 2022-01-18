import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Avaliacao } from '../models/avaliacao';

@Injectable({
  providedIn: 'root'
})
export class AvaliarService {

  private readonly URL_API = `${environment.URL_RAIZ}/avaliar`

  constructor(private httpClient: HttpClient) { }

  avaliarPedido(avaliacao: Avaliacao) {
    return this.httpClient.post(this.URL_API, avaliacao)
  }

}
