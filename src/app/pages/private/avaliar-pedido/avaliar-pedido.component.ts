import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Avaliacao } from 'src/app/models/avaliacao';
import { Usuario } from 'src/app/models/usuario';
import { AvaliarService } from 'src/app/services/avaliar.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-avaliar-pedido',
  templateUrl: './avaliar-pedido.component.html',
  styleUrls: ['./avaliar-pedido.component.css']
})
export class AvaliarPedidoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    private pedidoService: PedidoService, private avaliarService: AvaliarService,
    private router: Router) { }

  usuario: Usuario

  valorAvaliacao = 5

  formAvaliacao = this.formBuilder.group({
    nota: [this.valorAvaliacao],
    avaliacao: [null]
  })

  ngOnInit(): void {

    this.usuario = this.usuarioService.getUsuario();

  }

  get f() {
    return this.formAvaliacao?.controls;
  }

  avaliar() {

    const avaliacao: Avaliacao = {
      id: 0,
      nota: this.f.nota.value,
      avaliacao: this.f.avaliacao.value,
      idPedido: this.pedidoService.getPedido(),
      usuario: this.usuarioService.getUsuario()
    }

    this.avaliarService.avaliarPedido(avaliacao).subscribe(res => {
      this.pedidoService.limparPedidoLocalStorage()
      this.router.navigate(['criar-pedido']);
    }, err => {
      console.log(err);
    })

  }

}
