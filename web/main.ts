// Angular 2
import {
  enableDebugTools,
  disableDebugTools
} from '@angular/platform-browser';
import {
  ApplicationRef,
  enableProdMode
} from '@angular/core';

import { bootloader } from '@angularclass/hmr';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app/app.module';

// Compile and launch the module
export function main(): any {
   return platformBrowserDynamic().bootstrapModule(AppModule);
}

if ('production' === process.env.NODE_ENV) {
  enableProdMode();
}

bootloader(main);
