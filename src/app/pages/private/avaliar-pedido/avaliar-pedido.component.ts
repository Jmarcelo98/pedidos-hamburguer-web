import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-avaliar-pedido',
  templateUrl: './avaliar-pedido.component.html',
  styleUrls: ['./avaliar-pedido.component.css']
})
export class AvaliarPedidoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  usuario: Usuario

  valorAvaliacao = 5

  ngOnInit(): void {

    this.usuario = this.usuarioService.getUsuario();

  }

}
