import {
  CategoriesEnum,
  IQuestionsBurger2laMort,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.BURGERDELAMORT;

const questionKetchup = [
  {
    question: 'question01',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question02',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question03',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question04',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question05',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question06',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question07',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question08',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question09',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
  {
    question: 'question10',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Réponse',
  },
];

const questionsMayo = [
  {
    question: 'question01',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question02',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question03',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question04',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question05',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question06',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question07',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question08',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question09',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
  {
    question: 'question10',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Réponse',
  },
];

export const burger2laMort: IQuestionsBurger2laMort = {
  questions: [...questionKetchup, ...questionsMayo],
};
