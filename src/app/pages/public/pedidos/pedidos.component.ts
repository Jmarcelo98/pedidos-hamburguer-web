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
    alface: [true, [Validators.required]],
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
