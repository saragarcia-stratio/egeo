import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChangelogService {

   constructor(private http: Http) { }

   getChangelog(): Observable<string> {
      return this.http.get(location.pathname + 'assets/CHANGELOG.md')
         .map(response => response.text());
   }
}
