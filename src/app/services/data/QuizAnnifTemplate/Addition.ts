import { CategoriesEnum, IQuestionsAddition } from 'src/app/models/questions';

const Category = CategoriesEnum.ADDITION;
export const additionTheme = 'Les mots ayant deux fois la meme syllabe';

export const addition: IQuestionsAddition = {
  questions: [
    {
      question: 'Question addiction 1',
      category: Category,
      reponse: 'Réponse',
    },
    {
      question: 'Question addiction 2',
      category: Category,
      reponse: 'Réponse',
    },
    {
      question: 'Question addiction 3',
      category: Category,
      reponse: 'Réponse',
    },
    {
      question: 'Question addiction 4',
      category: Category,
      reponse: 'Réponse',
    },
  ],
};
