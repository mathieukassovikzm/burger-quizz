import {
  CategoriesEnum,
  IQuestionsMenu,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.MENU;

export const MenuKetchup = 'Menu Ketchup';
export const MenuMayo = 'Menu Mayo';

export const menu: IQuestionsMenu = {
  questions: [
    {
      question: '',
      team: TeamEnum.KETCHUP,
      category: Category,
      menu: MenuKetchup,
      reponse: '',
    },
  ],
};
