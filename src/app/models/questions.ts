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

export interface IProposition {
  letter: string;
  txt: string;
}

export interface IReponseProp {
  propositions: IProposition[];
  goodrep: number;
}

export interface IReponse {
  goodrep: string;
}

export interface IQuestion {
  question: string;
  category?: CategoriesEnum;
}

export interface IQuestionNuggets extends IQuestion {
  team?: TeamEnum | undefined;
  reponseProp?: IReponseProp;
}

export interface IQuestionsNuggets {
  questions: IQuestionNuggets[];
}

export interface IQuestionSelPoivre extends IQuestion {
  reponseProp?: IReponseProp;
}

export interface IQuestionsSelPoivre {
  questions: IQuestionSelPoivre[];
}

export interface IQuestionMenu extends IQuestion {
  team?: TeamEnum;
  menu: string;
  reponse?: string;
}

export interface IQuestionsMenu {
  questions: IQuestionMenu[];
}

export interface IGanacheDessert {
  name: string;
  imgUrl: string;
}

export interface IQuestionDessert extends IQuestion {
  imgUrl: string;
  team?: TeamEnum;
  reponse?: IGanacheDessert[];
}

export interface IQuestionsDessert {
  questions: IQuestionDessert[];
}

export interface IQuestionAddition extends IQuestion {
  reponse?: string;
}

export interface IQuestionsAddition {
  questions: IQuestionAddition[];
}

export interface IQuestionBurger2laMort extends IQuestion {
  team?: TeamEnum;
  reponse?: string;
}

export interface IQuestionsBurger2laMort {
  questions: IQuestionBurger2laMort[];
}
