import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component1Module } from './component1/component1.module';
import { Component2Module } from './component2/component2.module';

import { StModalModule } from 'egeo';


@NgModule({
   imports: [CommonModule, FormsModule, Component1Module, Component2Module, StModalModule],
   declarations: [ ],
   exports: []
})
export class TestModule2 { }



