import {
  CategoriesEnum,
  IProposition,
  IQuestionsSelPoivre,
} from 'src/app/models/questions';

const Category = CategoriesEnum.SELPOIVRE;

const propositionsKetchup = <IProposition[]>[
  { letter: 'A', txt: 'Lola' },
  { letter: 'B', txt: 'Lolo' },
  { letter: 'C', txt: 'Les deux' },
];

const propositionsMayo = <IProposition[]>[
  { letter: 'A', txt: 'Mamie plume' },
  { letter: 'B', txt: 'Geronimo' },
  { letter: 'C', txt: 'Les deux' },
];

export const selPoivre: IQuestionsSelPoivre = {
  questions: [
    {
      question: 'Je suis une chanson de Superbus...',
      category: Category,
      reponseProp: {
        propositions: propositionsKetchup,
        goodrep: 0,
      },
    },
    {
      question: 'Je suis un film de 2015...',
      category: Category,
      reponseProp: {
        propositions: propositionsKetchup,
        goodrep: 1,
      },
    },
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
    {
      question: "Je suis un inden d'amérique...",
      category: Category,
      reponseProp: {
        propositions: propositionsMayo,
        goodrep: 1,
      },
    },
    {
      question: 'Je suis une guerrière de Plumeliau...',
      category: Category,
      reponseProp: {
        propositions: propositionsMayo,
        goodrep: 0,
      },
    },
    {
      question: '',
      category: Category,
      reponseProp: {
        propositions: propositionsMayo,
        goodrep: 0,
      },
    },
    {
      question: '',
      category: Category,
      reponseProp: {
        propositions: propositionsMayo,
        goodrep: 0,
      },
    },
    {
      question: "J'ai des plumes dans le cul...",
      category: Category,
      reponseProp: {
        propositions: propositionsMayo,
        goodrep: 0,
      },
    },
  ],
};
