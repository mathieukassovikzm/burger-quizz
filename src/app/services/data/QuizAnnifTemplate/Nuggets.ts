import {
  CategoriesEnum,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.NUGGETS;

export const nuggets: IQuestionsNuggets = {
  questions: [
    {
      question: 'Question nuggets 1 ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Réponse1' },
          { letter: 'B', txt: 'Réponse2' },
          { letter: 'C', txt: 'Réponse3' },
          { letter: 'D', txt: 'Réponse4' },
        ],
        goodrep: 3,
      },
    },
    {
      question: 'Question nuggets 2 ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Réponse1' },
          { letter: 'B', txt: 'Réponse2' },
          { letter: 'C', txt: 'Réponse3' },
          { letter: 'D', txt: 'Réponse4' },
        ],
        goodrep: 1,
      },
    },
    {
      question: 'Question nuggets 3 ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Réponse1' },
          { letter: 'B', txt: 'Réponse2' },
          { letter: 'C', txt: 'Réponse3' },
          { letter: 'D', txt: 'Réponse4' },
        ],
        goodrep: 0,
      },
    },
    {
      question: 'Question nuggets 4 ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Réponse1' },
          { letter: 'B', txt: 'Réponse2' },
          { letter: 'C', txt: 'Réponse3' },
          { letter: 'D', txt: 'Réponse4' },
        ],
        goodrep: 2,
      },
    },
  ],
};
