import { CategoriesEnum, IQuestionsAddition } from 'src/app/models/questions';

const Category = CategoriesEnum.ADDITION;

export const addition: IQuestionsAddition = {
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
