import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2412356623.1234;
  porcentaje: number = 0.49;

  constructor() { }

  ngOnInit(): void {
  }

}
