import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Pedido } from 'src/app/models/pedido';
import { AdminService } from 'src/app/services/admin.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-painel-admin',
  templateUrl: './painel-admin.component.html',
  styleUrls: ['./painel-admin.component.css']
})
export class PainelAdminComponent implements OnInit {

  admin: Admin

  // tipo de receitas cadastradas
  pedidos: Pedido[] = [];

  aceita = "SIM"
  recusa = "NÃO"

  constructor(private pedidoService: PedidoService) { }

  async ngOnInit() {

    await this.buscasPedidosEmEspera()


  }
  
  async buscasPedidosEmEspera() {

    await this.pedidoService.buscarPedidosEmEspera().toPromise().then ( res => {
      this.pedidos = res;
    }).catch(err => {
      console.log("error");
      console.log(err);
    })

  }

}
