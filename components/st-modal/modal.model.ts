export interface TitleConfig {
   fontSize: number;
   backgroundColor: string;
}

export interface ModalTitle {
   title: string;
   icon: string;
}

export class StModalConfiguration {
   title: ModalTitle = { icon: undefined, title: 'Title' };
   titleConfig: TitleConfig = { fontSize: 24, backgroundColor: '#f3f3f3' };
   modalHeight: number = 300;
   modalWidth: number = 600;
   inputs: Object = {};
   outputs: Object = {};

   constructor() {}

   setTitleText(title: string): void {
      this.title.title = title;
   }

   setTitleIcon(icon: string): void {
      this.title.icon = icon;
   }

   setTitleFontSize(fontSize: number): void {
      this.titleConfig.fontSize = fontSize;
   }

   setTitleBackgroundColor(backgroundColor: string): void {
      this.titleConfig.backgroundColor = backgroundColor;
   }

   setTitleConfig(config: TitleConfig): void {
      this.titleConfig = config;
   }

   setTitle(title: ModalTitle): void {
      this.title = title;
   }
}
