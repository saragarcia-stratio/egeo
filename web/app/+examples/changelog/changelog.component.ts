import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangelogService } from './changelog.service';

@Component({
  selector: 'changelog',
  template: require('./changelog.component.html'),
  styles: [require('./changelog.component.scss')]
})

export class ChangelogComponent implements OnInit, OnDestroy {

   public changelog: string = '';

   private sub: Subscription;

   constructor(private service: ChangelogService) { }

   ngOnInit(): void {
      this.service.getChangelog().subscribe(response => this.changelog = response);
   }

   ngOnDestroy(): void {
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

}
