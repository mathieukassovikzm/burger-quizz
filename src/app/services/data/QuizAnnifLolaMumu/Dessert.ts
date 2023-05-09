import {
  CategoriesEnum,
  IProposition,
  IQuestionsDessert,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.DESSERT;

export const dessert: IQuestionsDessert = {
  questions: [
    {
      question: 'A qui appartient ces 3 visages?',
      imgUrl: '/assets/desserts/ganache-ketchup.jpg',
      team: TeamEnum.KETCHUP,
      category: Category,
      reponse: [
        { name: 'Jean', imgUrl: '/assets/desserts/ganache-ketchup-rep1.jpg' },
        { name: 'Jean', imgUrl: '/assets/desserts/ganache-ketchup-rep2.jpg' },
        { name: 'Jean', imgUrl: '/assets/desserts/ganache-ketchup-rep3.jpg' },
      ],
    },
    {
      question: 'A qui appartient ces 3 visages?',
      imgUrl: '/assets/desserts/ganache-mayo.jpg',
      team: TeamEnum.MAYO,
      category: Category,
      reponse: [
        { name: 'Jean', imgUrl: '/assets/desserts/ganache-mayo-rep1.jpg' },
        { name: 'Jean', imgUrl: '/assets/desserts/ganache-mayo-rep2.jpg' },
        { name: 'Jean', imgUrl: '/assets/desserts/ganache-mayo-rep3.jpg' },
      ],
    },
  ],
};
