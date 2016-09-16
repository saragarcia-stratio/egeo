import {OpaqueToken, NgModule} from '@angular/core';

/**
 * @internal
 */
export const COMPONENT_OUTLET_MODULE = new OpaqueToken('COMPONENT_OUTLET_MODULE');

/**
 * For setup for ComponentOutlet
 */
export function provideComponentOutletModule(metadata: NgModule): any[] {
    return [
        { provide: COMPONENT_OUTLET_MODULE, useValue: metadata }
    ];
}
