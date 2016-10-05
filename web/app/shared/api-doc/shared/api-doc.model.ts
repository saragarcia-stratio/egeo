export interface ApiDoc {
   title: string;
   description: string;
   apiSection: Api;
   modelSection?: Models;
   exampleDesc: string;
   haveModel: boolean;
}

export interface Api {
   description?: string;
   inputs: Array<ApiRow>;
   outputs: Array<ApiRow>;
}

export interface ApiRow {
   paramName: string;
   type: TYPES;
   required: boolean;
   details: string;
}

export interface Models {
   title: string;
   models: Array<any>;
}

export enum TYPES {STR, NUM, OBJ}
