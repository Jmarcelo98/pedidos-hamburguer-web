import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Pedido } from 'src/app/models/pedido';
import { AdminService } from 'src/app/services/admin.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { MensagensService } from 'src/app/services/util/mensagens.service';

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

  constructor(private pedidoService: PedidoService, private mensagem: MensagensService) { }

  async ngOnInit() {

    await this.buscasPedidosEmEspera()


  }

  async buscasPedidosEmEspera() {

    await this.pedidoService.buscarPedidosEmEspera().toPromise().then(res => {
      this.pedidos = res;
    }).catch(err => {
      console.log("error");
      console.log(err);
    })

  }

  async finalizarPedido(pedido: Pedido) {

    pedido.concluido = true;

    await this.pedidoService.finalizarPedido(pedido.id).toPromise().then(res => {
      this.mensagem.sucesso("Pedido finalizado! Entregue-o para " + pedido.usuarioDTO.nome + " " + pedido.usuarioDTO.sobrenome);
      this.buscasPedidosEmEspera();
    }).catch(err => {
      console.log("erro");

    })

  }

}
