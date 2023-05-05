export enum TeamEnum {
  KETCHUP = 'ketchup',
  MAYO = 'mayo',
}
export enum CategoriesEnum {
  NUGGETS = 'nuggets',
  SELPOIVRE = 'selpoivre',
  MENU = 'menu',
  DESSERT = 'dessert',
  ADDITION = 'addition',
  BURGERDELAMORT = 'burger2lamort',
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

export interface IQuestionsMenu {
  questions: IQuestion[];
}

export interface IQuestionsAddition {
  questions: IQuestion[];
}

export interface IQuestionsBurger2laMort {
  questions: IQuestion[];
}
