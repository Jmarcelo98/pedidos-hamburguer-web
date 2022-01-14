import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentProd } from 'src/environments/environment.prod';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  // localhost
  private readonly URL_API = `${environment.URL_RAIZ}/pedido`

  // na rede
  // private readonly URL_API = `${environmentProd.URL_RAIZ}/usuario`

  constructor(private httpClient: HttpClient) { }

  buscarPedidosEmEspera() {
    return this.httpClient.get<Pedido[]>(this.URL_API)
  }

}
