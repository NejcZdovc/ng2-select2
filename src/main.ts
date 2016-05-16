import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Select2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Select2AppComponent);
