import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  URL_RAIZ: string = environment.URL_RAIZ

ngOnInit(): void {
    if (isDevMode()) {
      console.log("Desenvolvedor!");
    } else {
      console.log("Produção!");
    }
}

}


