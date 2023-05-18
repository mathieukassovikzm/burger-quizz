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

const questionsKetchup = [
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
];

const questionsMayo = [
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
    question: "j'ai passé 60ans sans une ride...",
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 2,
    },
  },
  {
    question: "J'ai des plumes sur la tête...",
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 0,
    },
  },
  {
    question: "Mon surnom indique que j'ai des plumes dans le cul...",
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 0,
    },
  },
];

export const selPoivre: IQuestionsSelPoivre = {
  questions: [...questionsKetchup, ...questionsMayo],
};
