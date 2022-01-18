import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoDialogComponent } from 'src/app/component/confirmacao-dialog/confirmacao-dialog.component';
import { Admin } from 'src/app/models/admin';
import { Pedido } from 'src/app/models/pedido';
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

  constructor(private pedidoService: PedidoService, private mensagem: MensagensService,
    private confirmacaoDialog: MatDialog) { }

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

    this.confirmacaoDialog.open(ConfirmacaoDialogComponent).afterClosed().subscribe(confirm => {
      if (confirm) {
        pedido.concluido = true;

        this.pedidoService.finalizarPedido(pedido.id).toPromise().then(res => {
          this.mensagem.sucesso("Pedido finalizado! Entregue-o para " + pedido.usuarioDTO.nome + " " + pedido.usuarioDTO.sobrenome);
          this.buscasPedidosEmEspera();
        }).catch(err => {
          console.log("erro");

        })


      }

    })




  }

}
