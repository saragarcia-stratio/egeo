import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component2Module } from './component2/component2.module';

@NgModule({
   imports: [CommonModule, FormsModule, Component2Module],
   declarations: [],
   exports: [Component2Module]
})
export class TestModule { }



