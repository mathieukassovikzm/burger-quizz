export interface IPageInfos {
  route?: string;
  displayName?: string;
  iconName?: string;
  visibleInNav?: boolean;
}

export enum Pages {
  HOME,
  INTRO,
  EQUIPES,
  FIN,

  RULES,
  VIDEO,
  QUESTIONS,

  NUGGETS,
  SELPOIVRE,
  MENU,
  DESSERT,
  ADDITION,

  BURGERDELAMORTRULES,
  BURGERDELAMORTVIDEO,
  BURGERDELAMORTQUESTIONSK,
  BURGERDELAMORTQUESTIONSM,
}

export const LstPagesMap = new Map<Pages, IPageInfos>([
  [Pages.HOME, <IPageInfos>{ route: 'home' }],
  [Pages.INTRO, <IPageInfos>{ route: 'intro' }],
  [Pages.EQUIPES, <IPageInfos>{ route: 'equipes' }],
  [Pages.FIN, <IPageInfos>{ route: 'fin' }],

  [Pages.RULES, <IPageInfos>{ route: 'rules' }],
  [Pages.VIDEO, <IPageInfos>{ route: 'video' }],
  [Pages.QUESTIONS, <IPageInfos>{ route: 'question' }],

  [Pages.NUGGETS, <IPageInfos>{ route: 'nuggets' }],
  [Pages.SELPOIVRE, <IPageInfos>{ route: 'selpoivre' }],
  [Pages.MENU, <IPageInfos>{ route: 'menu' }],
  [Pages.DESSERT, <IPageInfos>{ route: 'dessert' }],
  [Pages.ADDITION, <IPageInfos>{ route: 'addition' }],

  [Pages.BURGERDELAMORTRULES, <IPageInfos>{ route: 'burger2lamort-rules' }],
  [Pages.BURGERDELAMORTVIDEO, <IPageInfos>{ route: 'burger2lamort-video' }],
  [
    Pages.BURGERDELAMORTQUESTIONSK,
    <IPageInfos>{ route: 'burger2lamort-question-ketchup' },
  ],
  [
    Pages.BURGERDELAMORTQUESTIONSM,
    <IPageInfos>{ route: 'burger2lamort-question-mayo' },
  ],
]);
