import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  // alterado quando clicar em salvar usuario
  foiEnviado = false;

  // verificar se é admin
  isAdmin = false

  // mostrando mensagem se for ADMIN
  adminTentandoLogarNoLugarErrado = false;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm?.controls;
  }

  async salvarUsuario() {
    this.foiEnviado = true

    if (this.f.nome.value != null) {
      await this.verificarAdmin(this.f.nome.value)

      if(this.adminTentandoLogarNoLugarErrado) {
        return;
      }

    }

    if (this.loginForm.invalid) {
      return;
    }

  }

  async verificarAdmin(nome: string) {

    await this.usuarioService.verificarAdmin(nome).toPromise().then(res => {
      this.adminTentandoLogarNoLugarErrado = res
    }).catch(err => {
      console.log(err);

    })
  }


}
