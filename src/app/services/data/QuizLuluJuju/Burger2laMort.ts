import {
  CategoriesEnum,
  IQuestionsBurger2laMort,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.BURGERDELAMORT;

const questionKetchup = [
  {
    question: '1+1 ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: '2',
  },
  {
    question: 'Qui est le copain de Boule ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Bill',
  },
  {
    question: 'Comment ça va ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Bien ou pas bien',
  },
  {
    question: 'Vrai ou Faux, il y a King Kong derrière vous ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Vrai ou faux',
  },
  {
    question: 'Que veut dire P.S.G ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Paris Saint Germain',
  },
  {
    question: 'Quel est le métier de Joe le taxi ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Taxi',
  },
  {
    question: 'Vous préférez le thé ou le café ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Thé ou café',
  },
  {
    question: 'Où sommes-nous ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Au mariage ou Guidel',
  },
  {
    question: 'Quelle est la couleur du cheval blanc de Napoléon ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Blanc',
  },
  {
    question: 'Quelle est la capitale de la France ?',
    category: Category,
    team: TeamEnum.KETCHUP,
    reponse: 'Paris',
  },
];

const questionsMayo = [
  {
    question: 'Quelle est la 3ème lettre de l’alphabet ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'C',
  },
  {
    question: 'Combien étaient les 3 petits cochons ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: '3',
  },
  {
    question: 'Quel est le prénom de Zinédine Zidane ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Zinédine',
  },
  {
    question: "Quelle est la capitale de l'Espagne ?",
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Madrid',
  },
  {
    question: '4×4 ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: '16',
  },
  {
    question: 'Qui est le plus petit des Daltons ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Jo',
  },
  {
    question: 'Si on me coupe 6 doigts à une main, combien m’en reste-t-il ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: '0',
  },
  {
    question: 'Quelle est la couleur du ciel la nuit ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'noire',
  },
  {
    question: 'Vrai ou faux, si je cours très vite, je peux m’envoler ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'Vrai ou faux',
  },
  {
    question: 'Quel est votre plat préféré ?',
    category: Category,
    team: TeamEnum.MAYO,
    reponse: 'au choix',
  },
];

export const burger2laMort: IQuestionsBurger2laMort = {
  questions: [...questionKetchup, ...questionsMayo],
};
