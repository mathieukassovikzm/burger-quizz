import {
  CategoriesEnum,
  IProposition,
  IQuestionsSelPoivre,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.SELPOIVRE;

const propositionsKetchup = <IProposition[]>[
  { letter: 'A', txt: 'Lola' },
  { letter: 'B', txt: 'Lolo' },
  { letter: 'C', txt: 'Les deux' },
];

export const selPoivre: IQuestionsSelPoivre = {
  questions: [
    {
      question: "Je m'appel Antoine et j'aime ploter...",
      category: Category,
      reponseProp: {
        propositions: propositionsKetchup,
        goodrep: 2,
      },
    },
    {
      question: 'Je suis blanc et je pointe souvent...',
      category: Category,
      reponseProp: {
        propositions: propositionsKetchup,
        goodrep: 1,
      },
    },
    {
      question: 'Je suis alcoolisé en ce moment',
      category: Category,
      reponseProp: {
        propositions: propositionsKetchup,
        goodrep: 0,
      },
    },
  ],
};
