export interface IPageInfos {
  route?: string;
  displayName?: string;
  iconName?: string;
  visibleInNav?: boolean;
}

export enum Pages {
  HOME,
  INTRO,
  EQUIPES
}

export const LstPagesMap = new Map<Pages, IPageInfos>([
  [
    Pages.HOME,
    <IPageInfos>{
      route: 'home',
    },
  ],
  [
    Pages.INTRO,
    <IPageInfos>{
      route: 'intro',
    },
  ],
  [
    Pages.INTRO,
    <IPageInfos>{
      route: 'intro',
    },
  ],
  [
    Pages.EQUIPES,
    <IPageInfos>{
      route: 'equipes',
    },
  ],
]);
