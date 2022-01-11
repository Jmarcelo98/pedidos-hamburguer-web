import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  activeUse = ""

  activeAdmin = ""

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (this.router.url == "/") {
      this.activeUse = "active"
    } else if (this.router.url == "/admin") {
      this.activeAdmin = "active"
    }
  }

}
