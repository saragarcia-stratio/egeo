import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'app-name',
   styles: [require('./app-name.component.scss')],
   template: require('./app-name.component.html'),
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNameComponent {

   @Input() companyName: string | undefined = 'STRATIO';
   @Input() appName: string | undefined;
   @Input() appLogoPath: string | undefined;
   @Input() qaTag: string;

   public showAppName(): boolean {
      return this.appName !== undefined;
   }
}
