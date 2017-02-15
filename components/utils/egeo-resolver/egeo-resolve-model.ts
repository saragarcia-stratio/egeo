import { Observable } from 'rxjs';

export interface EgeoResolverKeys {
   path: string;
   toResolve: any;
   resolved?: any;
}

export type TranslateFunctionType = (key: string | string[], interpolateParams?: Object) => Observable<{ [key: string]: string }>;
export type TranslateServiceType = { get: TranslateFunctionType };
