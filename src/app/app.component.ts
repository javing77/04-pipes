import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-pipes';
  nombre: string = 'javier cIsnerOs'

  mostrarNombre(){
    console.log( this.nombre );

  }
}
