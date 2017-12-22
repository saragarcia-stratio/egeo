/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import {
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   forwardRef,
   Input,
   OnInit,
   ViewChild,
   ElementRef
} from '@angular/core';
import {
   ControlValueAccessor,
   FormControl,
   NG_VALIDATORS,
   NG_VALUE_ACCESSOR,
   Validator
} from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

/**
 * @description {Component} Tag Input
 *
 * This component is a text input box that automatically creates tags out of a typed text.
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-tag-input
 *    </st-tag-input>
 * ```
 */
@Component({
   selector: 'st-tag-input',
   templateUrl: './st-tag-input.component.html',
   styleUrls: ['./st-tag-input.component.scss'],
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StTagInputComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StTagInputComponent), multi: true }],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StTagInputComponent implements ControlValueAccessor, Validator, OnInit {

   /** @input {string | null} [label=null] Label to show over the input. It is empty by default */
   @Input() label: string | null = null;
   /** @input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default */
   @Input() tooltip: string | null = null;
   /** @input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default */
   @Input() placeholder: string | null = null; // TODO
   /** @input {string | null} [errorMessage=null] Error message to show. It is empty by default */
   @Input() errorMessage: string | null = null;

   @ViewChild('newElement') newElementInput: ElementRef;

   public items: string[] = [];
   public innerInputContent: string = '';

   private _focus: boolean = false;
   private _newElementInput: HTMLElement | null = null;
   private _selected: number | null = null;

   onChange = (_: any) => { };
   onTouched = () => { };

   constructor(
      private _selectElement: ElementRef,
      private _cd: ChangeDetectorRef
   ) {
   }

   get hasLabel(): boolean {
      return this.label !== null && this.label.length > 0;
   }

   get hasError(): boolean {
      return this.errorMessage !== null;
   }

   get hasFocus(): boolean {
      return this._focus;
   }

   get hasPlaceholder(): boolean {
      return !this._focus && !this.items.length && this.placeholder !== null && this.placeholder.length > 0;
   }

   get isValidInput(): boolean {
      return this.innerInputContent.length ? this.items.indexOf(this.innerInputContent) === -1 : true;
   }

   get tagSelected(): number | null {
      return this._selected;
   }

   get selectId(): string | null {
      const select: HTMLElement = this._selectElement.nativeElement;
      return select.getAttribute('id') !== null ? select.id : null;
   }

   get inputId(): string | null {
      return this.selectId !== null ? `${this.selectId}-input` : null;
   }

   get labelId(): string | null {
      return this.selectId !== null ? `${this.selectId}-label` : null;
   }

   get tagId(): string | null {
      return this.selectId !== null ? `${this.selectId}-tag-` : null;
   }

   ngOnInit(): void {
      this._newElementInput = this.newElementInput.nativeElement;
   }

   writeValue(data: any): void {
      if (data && Array.isArray(data) && data.length) {
         this.items = [];
         for (const value of data) {
            this.items.push(value);
         }
         this.onChange(this.items);
         this._cd.markForCheck();
      }
   }

   validate(control: FormControl): any {}

   // Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }

   // Input actions
   onInputFocusIn(event: Event): void {
      this._focus = true;
      this._newElementInput.focus();
   }

   onInputFocusOut(event: Event): void {
      this._focus = false;
      if (this.innerInputContent.length && this.isValidInput) {
         this.addTag();
      } else {
         this.innerInputContent = '';
         this._newElementInput.innerText = '';
      }
   }

   onInputKeyDown(event: any): void {
      switch (event.keyCode) {
         case 188: // Comma
         case 13: // Enter
            if (this.innerInputContent.length && this.isValidInput) {
               this.addTag();
            }
            event.preventDefault();
            break;
         case 9: // Tab
            if (this.innerInputContent.length && this.isValidInput) {
               this.addTag();
               event.preventDefault();
            } else if (this.innerInputContent.length) {
               this.innerInputContent = '';
               this._newElementInput.innerText = '';
            }
            break;
         case 46: // Delete
            if (this.innerInputContent.length) {
               this.innerInputContent = '';
               this._newElementInput.innerText = '';
            } else if (this.items.length) {
               event.target.previousElementSibling.focus();
            }
            break;
         case 8: // Backspace
         case 37: // Left
            if (this.items.length && !this.innerInputContent.length) {
               event.target.previousElementSibling.focus();
            }
            break;
         default:
            break;
      }
   }

   // Tag actions
   onTagKeyDown(event: any, index: number): void {
      switch (event.keyCode) {
         case 8: // Backspace
         case 46: // Delete
            if (this._selected !== null) {
               this.deleteTag(this._selected);
               this._selected = null;
               this._newElementInput.focus();
            }
            break;
         case 37: // Left
            if (this._selected > 0) {
               event.target.previousElementSibling.focus();
            }
            break;
         case 39: // Right
            if (this._selected < this.items.length) {
               event.target.nextElementSibling.focus();
            }
            break;
         default:
            break;
      }
   }

   onTagFocusIn(event: Event, index: number): void {
      this._focus = true;
      this._selected = index;
   }

   onTagFocusOut(event: Event, index: number): void {
      this._focus = false;
      this._selected = null;
   }

   onTagClick(event: Event, index: number): void {
      event.stopPropagation();
      event.preventDefault();
   }

   private addTag(): void {
      this.items.push(this.innerInputContent);
      this.innerInputContent = '';
      this._newElementInput.innerText = '';
      this.onChange(this.items);
   }

   private deleteTag(index: number): void {
      this.items.splice(index, 1);
      this.onChange(this.items);
   }
}
