import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Daniela';
  genero: string = 'femenino';

  nombre2: string = 'Javier';
  genero2: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['Maria', 'Javier','Daniela', 'Luis', 'Martha' ]
  clientesMapa = {
    '=0':  'No tenemos ningun cliente esperando',
    '=1':  'tenemos un cliente esperando',
    'other':  'tenemos # clientes esperando'
  }

  cambiarCliente()
  {
    if(this.nombre == "Daniela")
    {
      this.nombre = this.nombre2;
      this.genero = this.genero2;
    }else{
      this.nombre = "Daniela";
      this.genero = "femenino"
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Javier',
    edad: 5,
    direccion : 'Bogota'
  }

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Data de la promesa');
    }, 3500)
   });

  constructor() { }

  ngOnInit(): void {
  }

}
