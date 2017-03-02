/**
 * TYPESCRIPT DECORATORS:
 * https://github.com/Microsoft/TypeScript/blob/28041547784b5c5d73b50472bbafe39137fed7dd/src/lib/es5.d.ts#L1299-L1302
 *
 * declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
 *
 * declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
 *
 * declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>)
 *       => TypedPropertyDescriptor<T> | void;
 *
 * declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
 */

import * as ReflectMetadata from 'reflect-metadata';

import { EgeoUtils } from '../utils';

const REQUIRED_METADATA = Symbol('Egeo');

export function Required(target: any, name: string): any {
   const meta: any = Reflect.getOwnMetadata(REQUIRED_METADATA, target.constructor) || {};
   meta[name] = meta.hasOwnProperty(name) && meta[name] || { type: METADATA_TYPE.PROPERTY };
   meta[name].required = true;

   Reflect.defineMetadata(REQUIRED_METADATA, meta, target.constructor);
}

export function CheckRequired(target: any): any {
   let _onInit = target.prototype.ngOnInit;
   if (_onInit !== undefined) {
      target.prototype.ngOnInit = function (...args: any[]): void {
         checkRequired(target, this);
         _onInit.apply(this, args);
      };
   } else {
      target.prototype.ngOnInit = function (): void {
         checkRequired(target, this);
      };
   }
}

function checkRequired(target: any, scope: any): void {
   const meta: any = Reflect.getOwnMetadata(REQUIRED_METADATA, target);
   if (meta !== undefined) {
      let inputs: Array<string> = Object.keys(meta);
      EgeoUtils.validateInputs(scope, inputs, target.name);
   }
}

export const enum METADATA_TYPE { PROPERTY };

export interface EgeoMetadata {
   type: METADATA_TYPE;
   required?: boolean;
}
