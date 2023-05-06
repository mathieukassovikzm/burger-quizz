import {
  CategoriesEnum,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.NUGGETS;

export const nuggets: IQuestionsNuggets = {
  questions: [
    {
      question:
        'Combien de poil au fesses avait Toinou lors de votre première rencontre ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: '0, oui Antoine se rase' },
          { letter: 'B', txt: "1, le survivior comme on l'appel " },
          { letter: 'C', txt: '69, proportions plaisante' },
          { letter: 'D', txt: 'Beaucoup trop...' },
        ],
        goodrep: 3,
      },
    },
    {
      question:
        'Combien de poil au fesses avait Toinou lors de votre première rencontre ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: '0, oui Antoine se rase' },
          { letter: 'B', txt: "1, le survivior comme on l'appel " },
          { letter: 'C', txt: '69, proportions plaisante' },
          { letter: 'D', txt: 'Beaucoup trop...' },
        ],
        goodrep: 2,
      },
    },
  ],
};
