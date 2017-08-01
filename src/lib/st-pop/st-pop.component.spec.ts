/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DebugElement, Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StPopComponent } from './st-pop.component';

@Component({
   selector: 'test-component',
   template: `
      <st-pop [hidden]="hidden" [placement]="placement">
         <div pop-button id="button"><button style="height:30px; width:20px">Button</button></div>
         <div pop-content id="content">Content</div>
      </st-pop>
   `
})
class TestComponent {
   @Input() hidden: boolean = true;
   @Input() placement: string = 'top';
}

describe('StPopComponent', () => {

   let component: TestComponent;
   let fixture: ComponentFixture<TestComponent>;
   let de: DebugElement;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StPopComponent, TestComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
   });


   it('should show the content of the pop', () => {
      component.hidden = false;
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('[hidden]')).toBeNull();
   });

   it('should hide the content of the pop', () => {
      component.hidden = true;
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('[hidden]')).toBeDefined();
   });

   it('should get correct coords', () => {
      component.hidden = false;

      component.placement = 'top';
      fixture.detectChanges();
      let content: HTMLElement = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(10px, -30px, 0px)');

      component.placement = 'top-start';
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(0px, -30px, 0px)');

      component.placement = 'top-end';
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(20px, -30px, 0px)');

      component.placement = 'bottom';
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(10px, 0px, 0px)');

      component.placement = 'bottom-start';
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(0px, 0px, 0px)');

      component.placement = 'bottom-end';
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(20px, 0px, 0px)');

      component.placement = 'unknown';
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(0px, 0px, 0px)');
   });


   it('should get init without button', () => {
      component.hidden = false;
      let button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#button');
      button.innerHTML = '';

      fixture.detectChanges();
      let content: HTMLElement = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toBeUndefined();
   });

});
