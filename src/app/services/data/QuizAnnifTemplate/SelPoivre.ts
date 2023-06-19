import {
  CategoriesEnum,
  IProposition,
  IQuestionsSelPoivre,
} from 'src/app/models/questions';

const Category = CategoriesEnum.SELPOIVRE;

const propositionsKetchup = <IProposition[]>[
  { letter: 'A', txt: 'Réponse1' },
  { letter: 'B', txt: 'Réponse2' },
  { letter: 'C', txt: 'Les deux' },
];

const propositionsMayo = <IProposition[]>[
  { letter: 'A', txt: 'Réponse1' },
  { letter: 'B', txt: 'Réponse2' },
  { letter: 'C', txt: 'Les deux' },
];

const questionsKetchup = [
  {
    question: 'Question selpoivre 1...',
    category: Category,
    reponseProp: {
      propositions: propositionsKetchup,
      goodrep: 0,
    },
  },
  {
    question: 'Question selpoivre 2...',
    category: Category,
    reponseProp: {
      propositions: propositionsKetchup,
      goodrep: 1,
    },
  },
  {
    question: 'Question selpoivre 3...',
    category: Category,
    reponseProp: {
      propositions: propositionsKetchup,
      goodrep: 2,
    },
  },
  {
    question: 'Question selpoivre 4...',
    category: Category,
    reponseProp: {
      propositions: propositionsKetchup,
      goodrep: 1,
    },
  },
  {
    question: 'Question selpoivre 5...',
    category: Category,
    reponseProp: {
      propositions: propositionsKetchup,
      goodrep: 0,
    },
  },
];

const questionsMayo = [
  {
    question: 'Question selpoivre 1...',
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 1,
    },
  },
  {
    question: 'Question selpoivre 2...',
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 0,
    },
  },
  {
    question: 'Question selpoivre 3...',
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 2,
    },
  },
  {
    question: 'Question selpoivre 4...',
    category: Category,
    reponseProp: {
      propositions: propositionsMayo,
      goodrep: 1,
    },
  },
  {
    question: 'Question selpoivre 5..',
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
