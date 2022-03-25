import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'javier'
  nombreUper: string = 'JAVIER'
  nombretitle: string = 'jaVieR'

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
