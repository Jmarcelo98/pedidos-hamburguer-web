import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  // formulario de login admin
  loginForm = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3)]],
    senha: [null, [Validators.required, Validators.minLength(3)]]
  })

  // usuario
  admin: Admin

  // alterado quando clicar em salvar usuario
  foiEnviado = false;

  // verificando se é admin msm
  isAdmin: boolean;

  // verificando se é ou nao admin (valida front)
  errorNaoAdmin: boolean

  // error de login
  response = null

  // validar no front
  existeError = false

  constructor(private formBuilder: FormBuilder, private adminService: AdminService,
    private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm?.controls;
  }

  async salvarUsuario() {
    this.foiEnviado = true


    if (this.f.nome.value != null) {

      await this.verificarAdmin(this.f.nome.value)

      if (!this.isAdmin) {
        this.errorNaoAdmin = true
        return;
      } else {
        this.errorNaoAdmin = false
      }

    }

    if (this.loginForm.invalid) {
      return;
    }

    const admin: Admin = {
      id: 0,
      nome: this.f.nome.value,
      senha: this.f.senha.value,
      admin: true
    }

    await this.adminService.loginAdmin(admin).toPromise().then( res => {
      this.admin = res
      this.adminService.setAdmin(this.admin)
      this.router.navigateByUrl('admin/painel')
    }).catch( err => {
      console.log(err);
      this.response = err.error
      this.existeError = true
    })

  }

  async verificarAdmin(nome: string) {

    await this.usuarioService.verificarAdmin(nome).toPromise().then(res => {
      this.isAdmin = res
    }).catch(err => {
      console.log(err);

    })
  }

}
