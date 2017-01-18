import { bootloader } from '@angularclass/hmr';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app/app.module';

// Compile and launch the module
export function main(): any {
   return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
