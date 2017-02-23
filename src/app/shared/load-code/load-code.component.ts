import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
   selector: 'st-load-code',
   templateUrl: './load-code.component.html'
})

export class LoadCodeComponent implements OnInit {
   @Input() file: string;

   @ViewChild('codeId') codeId: ElementRef;

   code: string = '';
   private type: string = 'typescript';

   ngOnInit(): void {
      if (this.file && this.file !== '') {
         let parts = this.file.split('.');
         let extension: string = parts[parts.length - 2];
         if (extension === 'model') {
            extension = 'typescript';
         }
         this.checkExtension(extension);
         this.code = this.getCode(this.file, extension);
      }
   }

   getCode(value: string, extension: string): string {
      let code: string = this.getCodeAsText(value);
      let languaje: PrismJS.LanguageDefinition = this.getLanguaje(extension);
      return Prism.highlight(code, languaje);
   }

   getClass(): string {
      return `language-${this.type}`;
   }

   private getCodeAsText(path: string): string {
      return require(`!!raw-loader!../../+examples/${path}`);
   }

   private getLanguaje(languaje: string): PrismJS.LanguageDefinition {
      let defaultLanguaje: string = 'html';
      let result: PrismJS.LanguageDefinition | undefined;
      result = (<any>Prism.languages)[languaje];
      if (result) {
         return result;
      } else {
         return (<any>Prism.languages)[defaultLanguaje];
      }
   }

   private checkExtension(extension: string): void {
      switch (extension) {
         case 'ts':
            this.type = 'typescript';
            break;
         case 'html':
            this.type = 'markup';
            break;
         case 'json':
            this.type = 'json';
            break;
         default:
            this.type = 'typescript';
            break;
      }
   }
}

interface PrismLanguaje {
   [key: string]: PrismJS.LanguageDefinition;
}
