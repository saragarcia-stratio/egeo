import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'fake-page',
   template: '<div>YOU NAVIGATE TO PAGE: {{pageName}}  <router-outlet></router-outlet> </div>',
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class FakePageComponent {
   public pageName: string = 'ERROR';

   constructor(private _router: ActivatedRoute) {
      this._router.data.subscribe(data => this.pageName = data['pageName']);
   }
}
