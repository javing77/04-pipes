import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean = true;

  orderPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Robbin',
      vuela : false,
      color : Color.verde
    },
    {
      nombre: 'DareDevil',
      vuela : true,
      color : Color.rojo
    },
    {
      nombre: 'Lintena Verde',
      vuela : true,
      color : Color.verde
    }
  ]

  cambiarMayuscula(){
    this.enMayusculas =  !this.enMayusculas;
  }

  cambiarOrden(valor: string)
  {
    this.orderPor = valor;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
