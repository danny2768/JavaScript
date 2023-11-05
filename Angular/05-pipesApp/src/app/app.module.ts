import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';
import localeFrCA from '@angular/common/locales/fr-CA';

registerLocaleData(localeEsCO);
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,

  ],
  providers: [
    // {
    //   provide: LOCALE_ID, useValue: 'es-CO'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
