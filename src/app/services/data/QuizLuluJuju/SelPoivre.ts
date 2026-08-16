import {
  CategoriesEnum,
  IProposition,
  IQuestionsSelPoivre,
} from 'src/app/models/questions';

const Category = CategoriesEnum.SELPOIVRE;

const propositionsMachine = <IProposition[]>[
  { letter: 'A', txt: 'Le marié' },
  { letter: 'B', txt: 'La machine à café' },
  { letter: 'C', txt: 'Les deux' },
];

const propositionsLuciole = <IProposition[]>[
  { letter: 'A', txt: 'Une luciole' },
  { letter: 'B', txt: 'La Mariée' },
  { letter: 'C', txt: 'Les deux' },
];

const questionsMachine = [
  {
    question: 'Peut mettre du temps à démarrer le matin.',
    category: Category,
    reponseProp: { propositions: propositionsMachine, goodrep: 2 },
  },
  {
    question: "A besoin d'être bien entretenu pour fonctionner correctement.",
    category: Category,
    reponseProp: { propositions: propositionsMachine, goodrep: 2 },
  },
  {
    question: 'Peut faire un chocolat chaud aux enfants.',
    category: Category,
    reponseProp: { propositions: propositionsMachine, goodrep: 0 },
  },
  {
    question: 'Peut être très chaud après utilisation.',
    category: Category,
    reponseProp: { propositions: propositionsMachine, goodrep: 2 },
  },
  {
    question: 'Peut être amélioré avec des options.',
    category: Category,
    reponseProp: { propositions: propositionsMachine, goodrep: 1 },
  },
  {
    question: "Est souvent recherché le lendemain d'une soirée difficile.",
    category: Category,
    reponseProp: { propositions: propositionsMachine, goodrep: 2 },
  },
];

const questionsLuciole = [
  {
    question: 'A les fesses qui brillent dans le noir.',
    category: Category,
    reponseProp: { propositions: propositionsLuciole, goodrep: 0 },
  },
  {
    question: 'Mon diminutif est Lulu.',
    category: Category,
    reponseProp: { propositions: propositionsLuciole, goodrep: 2 },
  },
  {
    question: "Elle communique pour s'accoupler.",
    category: Category,
    reponseProp: { propositions: propositionsLuciole, goodrep: 2 },
  },
  {
    question: "Je n'ai pas dévoré mon rencard au 1er rendrez-vous.",
    category: Category,
    reponseProp: { propositions: propositionsLuciole, goodrep: 1 },
  },
  {
    question: "Je suis de la famille des coléoptères.",
    category: Category,
    reponseProp: { propositions: propositionsLuciole, goodrep: 0 },
  },
  {
    question: "Elle passe la majorité de sa vie à l'état de larve.",
    category: Category,
    reponseProp: { propositions: propositionsLuciole, goodrep: 2 },
  },
];

export const selPoivre: IQuestionsSelPoivre = {
  questions: [
    ...questionsMachine,
    ...questionsLuciole,
  ],
};
