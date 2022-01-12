import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    molho: [null],
    bacon: [true],
    cebolaCaramelizada: [true],
    alface: [true],
    tomate: [true]
  })

  acrescentar = environment.ACRESCENTAR

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() {
    return this.pedidoForm?.controls;
  }

  fazerPedido() {

    console.log(this.f.alface.value);


  }

}
