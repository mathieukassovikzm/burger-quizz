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

  NUGGETS,
  RULES,
  VIDEO,
  QUESTIONS,

  SELPOIVRERULES,
  SELPOIVREVIDEO,
  SELPOIVREQUESTIONS,

  MENURULES,
  MENUVIDEO,
  MENUQUESTIONS,

  DESSERTRULES,
  DESSERTVIDEO,
  DESSERTQUESTIONS,

  ADDITIONRULES,
  ADDITIONVIDEO,
  ADDITIONQUESTIONS,

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

  [Pages.NUGGETS, <IPageInfos>{ route: 'nuggets' }],
  [Pages.RULES, <IPageInfos>{ route: 'rules' }],
  [Pages.VIDEO, <IPageInfos>{ route: 'video' }],
  [Pages.QUESTIONS, <IPageInfos>{ route: 'question' }],

  [Pages.SELPOIVRERULES, <IPageInfos>{ route: 'selpoivre-rules' }],
  [Pages.SELPOIVREVIDEO, <IPageInfos>{ route: 'selpoivre-video' }],
  [Pages.SELPOIVREQUESTIONS, <IPageInfos>{ route: 'selpoivre-question' }],

  [Pages.MENURULES, <IPageInfos>{ route: 'menu-rules' }],
  [Pages.MENUVIDEO, <IPageInfos>{ route: 'menu-video' }],
  [Pages.MENUQUESTIONS, <IPageInfos>{ route: 'menu-question' }],

  [Pages.DESSERTRULES, <IPageInfos>{ route: 'dessert-rules' }],
  [Pages.DESSERTVIDEO, <IPageInfos>{ route: 'dessert-video' }],
  [Pages.DESSERTQUESTIONS, <IPageInfos>{ route: 'dessert-question' }],

  [Pages.ADDITIONRULES, <IPageInfos>{ route: 'addition-rules' }],
  [Pages.ADDITIONVIDEO, <IPageInfos>{ route: 'addition-video' }],
  [Pages.ADDITIONQUESTIONS, <IPageInfos>{ route: 'addition-question' }],

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
