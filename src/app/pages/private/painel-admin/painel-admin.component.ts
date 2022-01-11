import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-painel-admin',
  templateUrl: './painel-admin.component.html',
  styleUrls: ['./painel-admin.component.css']
})
export class PainelAdminComponent implements OnInit {

  admin: Admin

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    


  }

}
