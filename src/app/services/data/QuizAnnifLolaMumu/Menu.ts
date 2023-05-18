import {
  CategoriesEnum,
  IQuestionsMenu,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.MENU;

export const MenuKetchup = 'Harry Potter';
export const MenuMayo = 'Pluméliau';

const questionKetchup = [
  {
    question: 'En quelle année est sorti le premier livre Harry Potter ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: '1997',
  },
  {
    question:
      "Combien de fois Hermione et Ron s'embrassent-ils dans les livres ?",
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: '1',
  },
  {
    question: "Combien y'a t'il d'enfants dans la famille Weasley ?",
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: '7',
  },
  {
    question: "Comment s'appelle la professeur de divination ?",
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Sybill Trelawney',
  },
];

const questionMayo = [
  {
    question: "Combien il y a t-il d'habitants à Pluméliau-Bieuzy ?",
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: '4355',
  },
  {
    question: "En quelle année Pluméliau et Bieuzy ont t'elles fusionnées ?",
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: '4355',
  },
  {
    question: 'De quelle couleur est le blason de Pluméliau ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Bleu et jaune',
  },
  {
    question:
      'Quel est le nom de la personne ayant vandalisé le calvaire de Pluméliau avec sa voiture ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Mumu',
  },
];
export const menu: IQuestionsMenu = {
  questions: [...questionKetchup, ...questionMayo],
};
