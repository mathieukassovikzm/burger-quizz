import {
  CategoriesEnum,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.NUGGETS;

export const nuggets: IQuestionsNuggets = {
  questions: [
    {
      question: '',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: ['', '', '', ''],
        goodrep: 0,
      },
    },
  ],
};
