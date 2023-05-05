export enum TeamEnum {
  KETCHUP = 'ketchup',
  MAYO = 'mayo',
  MENU = 'menu',
  DESSERT = 'dessert',
  ADDITION = 'addition',
  BURGER2LAMORT = 'burger2lamort'
}
export enum CategoriesEnum {
  NUGGETS = 'nuggets',
  SELPOIVRE = 'selpoivre',
}

export interface IReponseProp {
  propositions: string[];
  goodrep: number;
}

export interface IReponse {
  goodrep: string;
}

export interface IQuestion {
  question: string;
  category?: CategoriesEnum;
  team?: TeamEnum;
  reponseProp?: IReponseProp;
  reponse?: IReponse;
}

export interface IQuestionsNuggets {
  questions: IQuestion[];
}

export interface IQuestionsSelPoivre {
  questions: IQuestion[];
}
