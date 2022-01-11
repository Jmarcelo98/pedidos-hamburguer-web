import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // formulario de login public
  loginForm = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3)]],
    sobrenome: [null, [Validators.required, Validators.minLength(3)]]
  })

  // usuario
  usuario: Usuario

  // alterado quando clicar em salvar usuario
  foiEnviado = false;

  // verificar se é admin
  isAdmin = false

  // mostrando mensagem se for ADMIN
  adminTentandoLogarNoLugarErrado = false;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm?.controls;
  }

  async salvarUsuario() {
    this.foiEnviado = true

    if (this.f.nome.value != null) {
      await this.verificarAdmin(this.f.nome.value)

      if (this.adminTentandoLogarNoLugarErrado) {
        return;
      }

    }

    if (this.loginForm.invalid) {
      return;
    }

    const usuario: Usuario = {
      id: 0,
      nome: this.f.nome.value,
      sobrenome: this.f.sobrenome.value,
      senha: undefined,
      admin: false
    }

    await this.usuarioService.loginUsuario(usuario).toPromise().then( res => {
      this.usuario = res
      this.usuarioService.setUsuario(this.usuario)
      this.router.navigateByUrl('criar-pedido')
    }).catch( err => {
      console.log(err);
      
    })


  }

  async verificarAdmin(nome: string) {

    await this.usuarioService.verificarAdmin(nome).toPromise().then(res => {
      this.adminTentandoLogarNoLugarErrado = res
    }).catch(err => {
      console.log(err);

    })
  }


}
