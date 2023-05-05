export enum TeamEnum {
  KETCHUP = 'ketchup',
  MAYO = 'mayo',
}

export interface IReponseProp {
  propositions: string[];
  goodrep: number;
}

export interface IReponse {
  goodrep: string;
}

export interface IQuestion {
  question?: string;
  category?: string;
  team?: TeamEnum;
  reponseProp?: IReponseProp;
}

export interface IQuestionsNuggets {
  questions: IQuestion[];
}
