import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private toastr: ToastrService) { }

  public sucesso(mensagem: string) {
    this.toastr.success(mensagem)
  }

  public error (mensagem: string) {
    this.toastr.error(mensagem)
  }

  public info(mensagem: string) {
    this.toastr.info(mensagem)
  }

}

