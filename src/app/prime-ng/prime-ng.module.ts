import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import { FieldsetModule } from "primeng/fieldset";
import {MenuItem} from 'primeng/api';

import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ],
  imports: [
  ]
})
export class PrimeNgModule { }
