import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component2 } from './component2/component2';
import { Component1 } from './component1/component1';
import { StModal } from './../../../../../components';


@NgModule({
   imports: [CommonModule, FormsModule],
   declarations: [StModal, Component1, Component2],
   exports: []
})
export class TestModule2 { }



