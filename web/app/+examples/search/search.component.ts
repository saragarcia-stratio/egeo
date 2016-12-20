import { Component } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'search-example',
   template: require('./search.component.html'),
   styles: [require('./search.component.scss')]
})
export class SearchComponent {
   public apiDoc: ApiDoc;
   public placeholder: string = 'Text for search';
   public qaTag: string = 'search';
   public debounceTime: number = 0;
   public minLength: number = 0;

   public searched: string = '';

   /* tslint:disable:max-line-length */ // To disable tslint check of max lenght line
   constructor() {
      this.apiDoc = {
         title: 'Search',
         description: 'The search component is a box with an input inside where you can write free text to perform searches based on it.',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'placeholder', type: TYPES.STR, required: false, details: 'Text to display as long as the user does not focus on search box, Default: Search' },
               { paramName: 'debounce', type: TYPES.NUM, required: false, details: 'Time in ms to wait before launch search. Default 0' },
               { paramName: 'minLength', type: TYPES.NUM, required: false, details: 'Minimum length to do search. Default 0' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Identifier to generate a qa tag for each option' }
            ],
            outputs: [
               { paramName: 'onSearch', type: TYPES.STR, required: true, details: 'Function for call when search' }
            ]
         },
         exampleDesc: `Next, we can see an example of Search component you can see a search box and search result.
         You can also play with different input values and see how this affects the behaivor of search component.`
      };
   }

   onSearchResult(value: string): void {
      this.searched = value;
   }
}
