import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { EgeoResolverKeys, TranslateServiceType } from './egeo-resolve-model';

@Injectable()
export class EgeoResolveService {

   getKeys(object: any, key: string): Array<EgeoResolverKeys> {
      return this.searchInDeep(object, key);
   }

   setKeys(object: any, resolved: Array<EgeoResolverKeys>): void {
      resolved.forEach(element => _.set(object, element.path, element.resolved));
   }

   translate(object: any, translateService: TranslateServiceType): Observable<any> {
      let keys: Array<EgeoResolverKeys> = this.getKeys(object, 'translate'); // Get keys
      let toTranslate: Array<string> = this.extractTranslationKeys(keys); // Extract keys for translate service
      return translateService.get(toTranslate) // return object translation
         .map(translation => this.remapObjectWithTranslations(translation, keys, object));
   }

   translateArrayOfKeys(keys: Array<string>, translateService: TranslateServiceType): Observable<Array<string>> {
      return translateService.get(keys)
         .map(translation => this.remapArrayWithTranslations(translation, keys));
   }

   private remapArrayWithTranslations(translations: { [key: string]: string }, originalArray: Array<string>): Array<string> {
      return originalArray.map(key => translations[key]);
   }

   private remapObjectWithTranslations(translations: { [key: string]: string }, resolverKeys: Array<EgeoResolverKeys>, object: any): any {
      let newObj = _.cloneDeep(object);
      if (translations || _.keys(translations).length > 0) {
         _.forEach(translations, (value, key) => {
            let resolverKey: EgeoResolverKeys = this.getResolveItemByKey(resolverKeys, key);
            _.set(newObj, resolverKey.path, value);
         });
      }
      return newObj;
   }

   // Find a item
   private getResolveItemByKey(list: Array<EgeoResolverKeys>, key: string): EgeoResolverKeys {
      return list.find(item => _.values(_.omit(item.toResolve, 'translate'))[0] === key);
   }

   private extractTranslationKeys(list: Array<EgeoResolverKeys>): Array<string> {
      return list.map(element => <string>_.values(_.omit(element.toResolve, 'translate'))[0]);
   }

   private searchInDeep(object: any, key: string, path: string = ''): Array<EgeoResolverKeys> {
      if (_.has(object, key)) { // If we found key, return object.
         return [{ 'path': path, toResolve: object }];
      }
      let result: Array<EgeoResolverKeys> = [];

      let i = 0;
      _.forEach(object, (value, objKey) => { // Search in deep by all elements
         if (typeof value === 'object') {
            result.push.apply(result, this.searchInDeep(value, key, this.getPath(path, object, i, objKey)));
         }
         i++;
      });
      return result;
   }

   // Build path for future replace
   private getPath(actualPath: string, obj: any, pos: number, key: string): string {
      if (this.isArray(obj)) {
         actualPath = `${actualPath}[${pos}]`;
      } else {
         actualPath = actualPath === '' ? key : `${actualPath}.${key}`;
      }
      return actualPath;
   }

   private isArray(value: any): boolean {
      return Object.prototype.toString.call(value) === '[object Array]';
   }
}
