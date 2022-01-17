import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmacaoDialogComponent } from 'src/app/component/confirmacao-dialog/confirmacao-dialog.component';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MensagensService } from 'src/app/services/util/mensagens.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  // form do pedido
  pedidoForm = this.formBuilder.group({
    pontoCarne: ["AO PONTO"],
    pao: ["AUSTRALIANO"],
    molhoChipotle: [false],
    molhoBaconnaise: [false],
    bacon: [true],
    cebolaCaramelizada: [true],
    alface: [true],
    tomate: [true],
    queijo: [true]
  })

  acrescentar = environment.ACRESCENTAR

  desativarBotao: boolean

  constructor(private formBuilder: FormBuilder, private pedidoService: PedidoService,
    private usuarioService: UsuarioService, private router: Router, private mensagens: MensagensService) { }

  ngOnInit(): void {

    if (this.verificarSeJaFezPedido()) {
      this.desativarBotao = true
      this.mensagens.info("POR FAVOR, AVALIE SEU PEDIDO!")
      setTimeout(() => {
        this.router.navigate(['avaliar'])
      }, 5000);

    } else {
      this.desativarBotao = false
    }

  }

  get f() {
    return this.pedidoForm?.controls;
  }

  async fazerPedido() {

    let molhoBacon = ''
    let molhoChipotle = ''

    if (this.f.molhoBaconnaise.value) {
      molhoBacon = "BACONNAISE"
    }

    if (this.f.molhoChipotle.value) {
      molhoChipotle = "CHIPOTLE"
    }

    let novoPedido: Pedido = {
      id: 0,
      carneDTO: {
        id: 0,
        pontoCarne: this.f.pontoCarne.value,
      },
      paoDTO: {
        id: 0,
        nome: this.f.pao.value
      },
      bacon: this.f.bacon.value,
      cebolaCaramelizada: this.f.cebolaCaramelizada.value,
      alface: this.f.alface.value,
      tomate: this.f.tomate.value,
      queijo: this.f.queijo.value,
      dataCriacao: new Date(),
      concluido: false,
      usuarioDTO: this.usuarioService.getUsuario(),
      molhoDTO: [
        {
          id: 0,
          nomeMolho: molhoBacon
        }, {
          id: 0,
          nomeMolho: molhoChipotle
        }
      ]
    }

    await this.pedidoService.criarPedido(novoPedido).toPromise().then(res => {
      this.pedidoService.setIdPedido(res)
      this.ngOnInit()
    }).catch(err => {
      console.log(err);
    })

  }

  verificarSeJaFezPedido(): boolean {
    if (localStorage.getItem('ID_PEDIDO') == null) {
      return false
    } else {
      return true;
    }
  }

}
