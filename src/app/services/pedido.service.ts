import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly URL_API = `${environment.URL_RAIZ}/pedido`

  private readonly STORAGE_ID_PEDIDO = "ID_PEDIDO";

  idPedido: number

  constructor(private httpClient: HttpClient) { }

  buscarPedidosEmEspera() {
    return this.httpClient.get<Pedido[]>(this.URL_API)
  }

  criarPedido(pedido: Pedido) {
    return this.httpClient.post<number>(this.URL_API, pedido);
  }

  finalizarPedido(idPedido: number) {
    return this.httpClient.put(`${this.URL_API}/finalizar`, idPedido)
  }

  setIdPedido(id: number) {
    localStorage.setItem(this.STORAGE_ID_PEDIDO, window.btoa(JSON.stringify(id)));
  }

  getIdPedido(): number {
    return this.idPedido = JSON.parse(window.atob(window.localStorage.getItem(this.STORAGE_ID_PEDIDO) || ''))
  }

  public fezPedido(): boolean {
    const admin = localStorage.getItem(this.STORAGE_ID_PEDIDO)
    if (admin == null) {
      return false;
    }
    return true
  }


}
