import { CategoriesEnum, IQuestionsAddition } from 'src/app/models/questions';

const Category = CategoriesEnum.ADDITION;
export const additionTheme = 'Les mots ayant deux fois la meme syllabe';

export const addition: IQuestionsAddition = {
  questions: [
    {
      question: 'Synonyme de grand-mère...',
      category: Category,
      reponse: 'Mémé',
    },

    {
      question: 'Ce soir on ne va pas faire un gros...',
      category: Category,
      reponse: 'Dodo',
    },
    {
      question: "Beaucoup d'invités en ont un tout petit ce soir...",
      category: Category,
      reponse: 'Kiki',
    },
    {
      question: 'Pan pan...',
      category: Category,
      reponse: 'Culcul',
    },
    {
      question: 'La bite a...',
      category: Category,
      reponse: 'Dudu',
    },
    {
      question: 'Gros Jacquie qui se la pete...',
      category: Category,
      reponse: 'Kéké',
    },
  ],
};
