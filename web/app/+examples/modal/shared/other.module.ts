import { NgModule } from '@angular/core';
import { Component2 } from './component2/component2';
import { FormsModule } from '@angular/forms';

@NgModule({
   imports: [FormsModule],
   declarations: [Component2],
   exports: [Component2]
})
export class TestModule { }



