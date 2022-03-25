import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar la localizacion de la app
import localesEs from '@angular/common/locales/es-CO'
import localesFr from '@angular/common/locales/fr'
import { registerLocaleData } from "@angular/common";

registerLocaleData( localesEs);
registerLocaleData( localesFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
