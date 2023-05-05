import { CategoriesEnum, IQuestionsMenu } from 'src/app/models/questions';

const Category = CategoriesEnum.MENU;

export const menu: IQuestionsMenu = {
  questions: [
    {
      question: '',
      category: Category,
      reponse: {
        goodrep: '',
      },
    },
  ],
};
