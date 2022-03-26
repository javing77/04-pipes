import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];


  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Pipes Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Texto y Fechas',
            icon: 'pi pi-align-left',
            routerLink : '/'
          },
          {
            label: 'numeros',
            icon: 'pi pi-dollar',
            routerLink : 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink : 'no-comunes'
          }]
      },
      {
        label: 'Pipes Personalziados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  }

}


