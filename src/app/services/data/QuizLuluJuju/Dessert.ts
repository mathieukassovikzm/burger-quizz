import {
  CategoriesEnum,
  IProposition,
  IQuestionsDessert,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.DESSERT;

// TODO: le docx source ne donne pas les visages à mélanger pour ce round,
// juste la consigne "reprendre les images que tu as déjà faites" (mélange de
// 3 visages par ganache, 40s). Il faut fournir les vraies images/noms et les
// mettre dans src/assets/desserts/.
export const dessert: IQuestionsDessert = {
  questions: [
    {
      question: 'A qui appartient ces 3 visages?',
      imgUrl: '/assets/desserts/ganache-ketchup.jpg',
      team: TeamEnum.KETCHUP,
      category: Category,
      reponse: [
        { name: 'À compléter', imgUrl: '/assets/desserts/ganache-ketchup-rep1.jpg' },
        { name: 'À compléter', imgUrl: '/assets/desserts/ganache-ketchup-rep2.jpg' },
        { name: 'À compléter', imgUrl: '/assets/desserts/ganache-ketchup-rep3.jpg' },
      ],
    },
    {
      question: 'A qui appartient ces 3 visages?',
      imgUrl: '/assets/desserts/ganache-mayo.jpg',
      team: TeamEnum.MAYO,
      category: Category,
      reponse: [
        { name: 'À compléter', imgUrl: '/assets/desserts/ganache-mayo-rep1.jpg' },
        { name: 'À compléter', imgUrl: '/assets/desserts/ganache-mayo-rep2.jpg' },
        { name: 'À compléter', imgUrl: '/assets/desserts/ganache-mayo-rep3.jpg' },
      ],
    },
  ],
};
