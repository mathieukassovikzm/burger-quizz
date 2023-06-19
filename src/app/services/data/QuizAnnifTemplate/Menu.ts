import {
  CategoriesEnum,
  IQuestionsMenu,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.MENU;

export const MenuKetchup = 'Theme ketchup';
export const MenuMayo = 'Theme Mayo';

const questionKetchup = [
  {
    question: 'Question Menu 1 ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Réponse',
  },
  {
    question: 'Question Menu 2 ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Réponse',
  },
  {
    question: 'Question Menu 3 ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Réponse',
  },
  {
    question: 'Question Menu 4 ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Réponse',
  },
];

const questionMayo = [
  {
    question: 'Question Menu 1 ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Réponse',
  },
  {
    question: 'Question Menu 2 ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Réponse',
  },
  {
    question: 'Question Menu 3 ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Réponse',
  },
  {
    question: 'Question Menu 4 ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Réponse',
  },
];
export const menu: IQuestionsMenu = {
  questions: [...questionKetchup, ...questionMayo],
};
