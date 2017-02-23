import { NgModule } from '@angular/core';

import { Component1 } from './component1';
import { Component2Module } from '../component2/component2.module';

@NgModule({
   imports: [Component2Module],
   exports: [Component1],
   declarations: [Component1],
   providers: []
})
export class Component1Module { }
