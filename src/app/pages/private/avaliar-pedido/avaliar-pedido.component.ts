import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Avaliacao } from 'src/app/models/avaliacao';
import { Usuario } from 'src/app/models/usuario';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-avaliar-pedido',
  templateUrl: './avaliar-pedido.component.html',
  styleUrls: ['./avaliar-pedido.component.css']
})
export class AvaliarPedidoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private pedidoService: PedidoService) { }

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
      idPedido: this.pedidoService.getIdPedido(),
      usuario: this.usuarioService.getUsuario()
    } 

  }

}
