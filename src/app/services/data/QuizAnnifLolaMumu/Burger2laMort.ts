import {
  CategoriesEnum,
  IQuestionsBurger2laMort,
} from 'src/app/models/questions';

const Category = CategoriesEnum.BURGERDELAMORT;

export const burger2laMort: IQuestionsBurger2laMort = {
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
