import { Component } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'search-example',
   templateUrl: './search.component.html',
   styleUrls: ['search.component.scss']
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
         description: 'The search component is a box with an input inside where you can write free text to perform searches based on it. This component only fire event search with search text, not do the search. When clear the value in search box always fire a empty search value for notify and when click on zoom or enter always fire a search event with search value',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'debounce', type: TYPES.NUM, required: false, details: 'Inactivity time to wait (milliseconds) before launch search. Default 0' },
               { paramName: 'hasClearButton', type: TYPES.BOOL, required: false, details: 'Turn on or off the clear search button' },
               { paramName: 'liveSearch', type: TYPES.BOOL, required: false, details: 'True for search while user type in search box. When flase the user need to click on button or press enter to search. Default: true' },
               { paramName: 'minLength', type: TYPES.NUM, required: false, details: 'Minimum length to launch search event. Default 0' },
               { paramName: 'placeholder', type: TYPES.STR, required: false, details: 'Text to display as long as the user does not focus on search box, Default: Search' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Identifier to apply in search box for QA tests' },
               { paramName: 'searchOnlyOnClick', type: TYPES.BOOL, required: false, details: 'True search only on click on zoom, false search always. Default false' },
               { paramName: 'value', type: TYPES.STR, required: false, details: 'Assign the value from outside to the search field' }
            ],
            outputs: [
               { paramName: 'search', type: TYPES.STR, required: true, details: 'Event fired when search' }
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
